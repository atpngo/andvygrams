
type SlotTileProps = {
    letter: string
}

export default function SlotTile({letter} : SlotTileProps)
{
    if (letter !== "")
    {
        return (
            <div
                className="flex justify-center items-center text-white bg-alt-pink border-4 rounded-sm w-14 h-14 text-[40px]"
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