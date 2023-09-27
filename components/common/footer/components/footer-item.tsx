import Link from 'next/link'

export interface IFooterItemProps {
    title: string
    items: string[]
}

export function FooterItem({ title, items }: IFooterItemProps) {
    return (
        <li className="flex-1">
            <h3 className="uppercase font-medium mb-4">{title}</h3>
            <ul>
                {items.map((item) => (
                    <li key={item} className="mb-3 last-of-type:mb-0">
                        <Link
                            href={'/'}
                            className="text-sm text-secondary hover:text-primary hover:translate-x-0.5 ease-in-out duration-200"
                        >
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </li>
    )
}
