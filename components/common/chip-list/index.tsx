import { Chip } from '@/components/common/chip-list/components'
import { SkeletonCard } from '@/components/loadings'

export interface IChipListProps {
    list: Record<string, string | number>[]
    isLoading?: boolean
}

export function ChipList({ list, isLoading = false }: IChipListProps) {
    if (isLoading)
        return (
            <div className="flex gap-4 flex-wrap w-full">
                {Array.from({ length: 7 }, (_, idx) => idx + 1).map((idx) => (
                    <SkeletonCard key={idx} className="!h-9 !w-20" />
                ))}
            </div>
        )

    return (
        <div className="flex gap-3 flex-wrap">
            {list.map((item) => (
                <Chip key={item.id} item={item} />
            ))}
        </div>
    )
}
