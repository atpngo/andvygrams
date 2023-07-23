'use client'
import Image from "next/image";
import Container from "../components/Container";
import LetterTile from "../components/LetterTile";
import SlotTile from "../components/SlotTile";
import ShuffleIcon from '@mui/icons-material/Shuffle';
import axios from 'axios';
import { useEffect, useState } from "react";

export default function Page()
{
    const [val, setVal] = useState('cows');
    // const res = await fetch('/api/words/all', {method: 'GET'});
    useEffect(() => {
        axios.get('/api/words/all').then(
            res => {
                setVal(res.data.text);
            }
        )
    }, [])
    return (
        <div className="flex z-10 flex-col p-4 h-screen justify-center items-center justify-evenly">
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
                <Container variant="lg">
                    <p className="-my-4 text-[80px]">00:54</p>
                </Container>
                {/* SCORE */}
                <Container variant="lg">
                    <div className="flex flex-col text-center my-2">
                        <p className="text-[40px]">SCORE: 13000</p>
                        <p className="text-[20px]">WORDS: 15</p>
                    </div>
                </Container>
                {/* SHUFFLE */}
                <ShuffleIcon className="text-white text-[4rem]"/>
                {/* ENTER */}
                <Container variant="sm">
                    <p className="text-[30px] px-4">ENTER</p>
                </Container>
            </div>
            {/* GAME */}
            <div className="flex flex-col space-y-2">
                {/* SLOTS */}
                <div className="flex space-x-2">
                    <SlotTile letter=""/>
                    <SlotTile letter=""/>
                    <SlotTile letter=""/>
                    <SlotTile letter=""/>
                    <SlotTile letter=""/>
                    <SlotTile letter=""/>
                </div>
                {/* LETTERS */}
                <div className="flex space-x-2">
                    <LetterTile letter="B"/>
                    <LetterTile letter="O"/>
                    <LetterTile letter="O"/>
                    <LetterTile letter="O"/>
                    <LetterTile letter="B"/>
                    <LetterTile letter="S"/>
                </div>
            </div>
        </div>
    )
}