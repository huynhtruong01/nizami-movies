import { FooterItem } from '@/components/common/footer/components'
import { footerData } from '@/data'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookSquare } from 'react-icons/fa'
import { Container } from '..'

export function Footer() {
    return (
        <footer className="bg-header-color pt-10 pb-6">
            <Container>
                <div className="pb-8">
                    <ul className="grid grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-6">
                        {footerData.map((data) => (
                            <FooterItem
                                key={data.title}
                                title={data.title}
                                items={data.items}
                            />
                        ))}
                        <li className="flex-1">
                            <h3 className="uppercase font-medium mb-4">Contact</h3>
                            <ul className="flex gap-4">
                                <li>
                                    <a
                                        href="https://www.facebook.com/roller.jon"
                                        target="_blank"
                                    >
                                        <FaFacebookSquare className="w-6 h-6 text-secondary-dark hover:text-primary ease-in-out duration-200" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/truong_01h/"
                                        target="_blank"
                                    >
                                        <AiFillInstagram className="w-6 h-6 text-secondary-dark hover:text-primary ease-in-out duration-200" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://twitter.com/AtheticsHuynh1"
                                        target="_blank"
                                    >
                                        <AiOutlineTwitter className="w-6 h-6 text-secondary-dark hover:text-primary ease-in-out duration-200" />
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <hr className="border-secondary" />
                <div className="pt-6">
                    <p className="text-center text-secondary text-sm">
                        © 2023 Athetics Cinema. All Right Reserved
                    </p>
                </div>
            </Container>
        </footer>
    )
}
