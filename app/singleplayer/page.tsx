'use client'
import Image from "next/image";
import Container from "../components/Container";
import LetterTile from "../components/LetterTile";
import SlotTile from "../components/SlotTile";
import ShuffleIcon from '@mui/icons-material/Shuffle';
import axios from 'axios';
import { useEffect, useState } from "react";
import EnterButton from "../components/EnterButton";
import { motion } from "framer-motion"
import { useTimer } from "../hooks/useTimer";
import { useKeyDown } from "../hooks/useKeyDown";
import { useKeyUp } from "../hooks/useKeyUp";
import { useSpring, animated } from "react-spring"; 

type AnimatedNumberProps = {
    current: number,
    next: number
}

const AnimatedNumber = ({ current, next }: AnimatedNumberProps) => {
    const { number } = useSpring({
        from: { number: current },
        number: next,
        delay: 200,
        config: { mass: 1, tension: 80, friction: 20 }
    })
    return <animated.p>{number.to((next) => next.toFixed(0))}</animated.p>
}

function shuffleArray(array: string[]) {
    let a = [...array];
    return a.sort(() => Math.random() - 0.5);
}

interface PointType {
    [key: number]: number
}

const REWARDED_POINTS: PointType = {
    3: 100,
    4: 400,
    5: 800,
    6: 1400
}

export default function Page()
{
    const {seconds, start, pause, running, stop} = useTimer(() => {
        window.alert("ALL DONE")
    }, 60)
    const [enterButtonPressed, setEnterButtonPressed] = useState(false)
    const [loading, setLoading] = useState(true);
    const [letters, setLetters] = useState(["", "", "", "", "", ""])
    const [constLetters, setConstLetters] = useState(["", "", "", "", "", ""])
    const [answers, setAnswers] = useState(Object);
    const [usedLetters, setUsedLetters] = useState<string[]>([]);
    const [solvedWords, setSolvedWords] = useState<string[]>([]);
    const [prevPoints, setPrevPoints] = useState(0);
    const [points, setPoints] = useState(0);
    const [words, setWords] = useState(0);
    const [states, setState] = useState([false, false, false, false, false, false]);


    const removeLastLetterFromBoard = () => {
        if (usedLetters.length > 0)
        {
            // get last letter
            let removed = usedLetters[usedLetters.length-1];
            // pop it
            setUsedLetters((prev) => {
                let newState = [...prev];
                newState.pop();
                return newState;
            });
    
            let firstIndex = constLetters.indexOf(removed);
            // resolve repeat letters
            for (let i=0; i<letters.length; i++)
            {
                if (letters[i] === "" && constLetters[i] === removed)
                {
                    firstIndex = i;
                }
            }
            // add back to options
            setLetters((prev) => {
                let newState = [...prev];
                newState[firstIndex] = removed;
                return newState;
            })
            // no longer being pressed
            setState((prev) => {
                let newState = [...prev];
                newState[firstIndex] = false;
                return newState;
            })
        }
    }

    useKeyDown((_key) => {
        let key = _key.toUpperCase();
        console.log(key)
        if (letters.includes(key))
        {
            // first index of letter
            const firstIndex = letters.indexOf(key);
            // push first unused letter -> used
            setUsedLetters((prev) => {
                prev.push(letters[firstIndex]); 
                return prev;
            });
            // mark as used
            setLetters((prev) => {
                let newState = [...prev];
                newState[firstIndex] = "";
                return newState;
            })

            setState((prev) => {
                let newState = [...prev];
                newState[letters.indexOf(key)] = true;
                return newState;
            });

        }
        if (key === "ENTER")
        {
            setEnterButtonPressed(true);
        }

        if (key === "BACKSPACE" && usedLetters.length > 0)
        {
            removeLastLetterFromBoard();
        }
    })

    useKeyUp((_key) => {
        let key = _key.toUpperCase();
        if (letters.includes(key))
        {
            setState((prev) => {
                let newState = [...prev];
                newState[letters.indexOf(key)] = false;
                return newState;
            });
        }
        if (key === "ENTER")
        {
            setEnterButtonPressed(false);
            // TODO: maybe turn into function?
            if (usedLetters.length > 2)
            {
                console.log("USED LETTERS", usedLetters);
                let options = answers[usedLetters.length];
                let word = usedLetters.join("");
                // TODO: error toast if you already solved this word
                if (options.includes(word) && !solvedWords.includes(word))
                {
                    setPoints((prev) => {
                        setPrevPoints(prev);
                        return prev + REWARDED_POINTS[usedLetters.length];
                    })
                    setWords((prev) => {
                        return prev + 1
                    })
                    setSolvedWords((prev) => {
                        let tmp = [...prev];
                        tmp.push(word)
                        return tmp;
                    })
                }

                // reset words
                setUsedLetters([]);
                setLetters(constLetters);

            }
        }
    })

    const [val, setVal] = useState(null);
    useEffect(() => {
        axios.get('/api/words/%20?length=6', {}).then(
            res => {
                let words = res.data.words;
                const randomNum = Math.floor(Math.random()*words.length);
                const word = words[randomNum];
                const shuffled = shuffleArray(Array.from(word));
                setLetters(shuffled);
                setConstLetters(shuffled);
                axios.get('/api/anagrams/%20?letters=' + word).then(
                    res_2 => {
                        setAnswers(res_2.data.words);
                        console.log(res_2.data.words)
                        setLoading(false);
                        start();
                    }
                )
                
            }
        )
    }, [])

    if (loading)
    {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div className="flex z-10 flex-col p-4 h-screen justify-center items-center justify-evenly" tabIndex={0}>
            {/* LOGO */}
            <div>
                <Image alt="logo" src="/logo.png" width={1000} height={20} className="drop-shadow-lg"/>
            </div>
            <div className="text-white z-10">
                {val}
            </div>
            {/* ETC */}
            <div className="flex flex-col space-y-3 items-center">
                {/* TIMER */}
                <Container>
                    <p className="-my-4 text-[80px]">0{Math.floor(seconds/60)}:{seconds < 10 && 0}{seconds%60}{(seconds%60 === 0 && seconds > 0) && 0}</p>
                </Container>
                {/* SCORE */}
                <Container>
                    <div className="flex flex-col text-center my-2">
                        <div className="text-[40px] flex flex-row space-x-2">
                            <p>SCORE:</p>
                            <AnimatedNumber current={prevPoints} next={points}/>
                        </div>
                        <p className="text-[20px]">WORDS: {words}</p>
                    </div>
                </Container>
                {/* SHUFFLE */}
                <motion.div whileHover={{scale: 1.2}} whileTap={{scale: 1.1}} onClick={() => {
                    let shuffled = shuffleArray(letters)
                    setLetters(shuffled);
                }}>
                    <ShuffleIcon className="text-white text-[4rem]"/>
                </motion.div>
                {/* ENTER */}
                <EnterButton isPressed={enterButtonPressed}>
                    <p className="text-[30px] px-4">ENTER</p>
                </EnterButton>
            </div>
            {/* GAME */}
            <div className="flex flex-col space-y-2">
                {/* SLOTS */}
                <div className="flex space-x-2">
                    {usedLetters.map((letter, idx) => {
                        return (
                            <SlotTile letter={letter} key={idx}/>
                        )
                    })}
                    {Array(letters.length-usedLetters.length).fill("").map((letter, idx) => {
                        return <SlotTile letter={letter} key={idx}/>
                    })}
                </div>
                {/* LETTERS */}
                <div className="flex space-x-2">
                    {letters.map((letter, idx) => {
                        return (
                            <LetterTile key={idx} isPressed={states[idx]} letter={letter} onActivate={() => {console.log('hey')}}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}