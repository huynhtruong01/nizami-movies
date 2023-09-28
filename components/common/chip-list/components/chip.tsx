export interface IChipProps {
    item: Record<string, string | number>
}

export function Chip({ item }: IChipProps) {
    return (
        <div className="inline-block text-sm border-2 border-primary rounded-full px-3.5 py-1.5 cursor-pointer hover:bg-primary hover:text-body-color duration-200 ease-in-out">
            {item.name}
        </div>
    )
}
