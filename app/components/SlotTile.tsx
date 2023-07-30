
type SlotTileProps = {
    letter: string,
    removeFunction: () => void
}

export default function SlotTile({letter, removeFunction} : SlotTileProps)
{
    if (letter !== "")
    {
        return (
            <div
                className="flex justify-center items-center text-white bg-alt-pink border-4 rounded-sm w-14 h-14 text-[40px] cursor-pointer"
                onClick={removeFunction}
            >
                {letter}
            </div>
        )
    }

    return (
        <div className="flex justify-center items-center text-white bg-gray border-4 rounded-sm w-14 h-14 text-[40px]">
            {letter}
        </div>
    )
}