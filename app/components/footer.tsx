import Link from "next/link";

export default function Footer() {
    const col1 = [
        { title: 'help', link: 'xxx' },
        { title: 'members login', link: 'xxx' },
        { title: 'place an exchange/return ', link: 'xxxx' },
        { title: 'return policy ', link: 'xxx' },
    ];
    const col2 = [
        { title: 'company', link: 'xxx' },
        { title: 'story', link: 'xxx' },
        { title: 'careers', link: 'xxx' },
        { title: 'return policy ', link: 'xxx' },
    ];

    return (
        <footer className="bg-gray-200 text-black mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
                <div className="flex flex-col">
                <div className="flex justify-center md:justify-start items-center">
                    <div className="text-4xl font-bold pl-5 mt-5 mb-10 tracking-wider">E C L I P S E</div>
                </div>
                <div className="items-center px-5 text-xs">
                    <p>© 2021 All rights reserved</p>
                </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col items-start">
                        {col1.map((item, index) => (
                            <Link key={index} href={item.link} passHref>
                                <div className="mx-2 py-1 hover:underline text-xs">
                                    {item.title}
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-col items-start">
                        {col2.map((item, index) => (
                            <Link key={index} href={item.link} passHref>
                                <div className="mx-2 py-1 hover:underline text-xs">
                                    {item.title}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-black flex flex-col md:flex-row justify-between items-center mx-auto px-10 py-1">
                <div className="text-white text-sm py-1 text-center">
                    C O N N E C T 
                </div>
                <div className="text-white flex flex-col md:flex-row justify-evenly items-center">
                    <Link className="text-white mx-10 text-xs py-1 hover:underline" href={'/'}>
                        INSTAGRAM 
                    </Link>
                    <Link className="text-white mx-10 text-xs py-1 hover:underline" href={'/'}>
                        FACEBOOK
                    </Link>
                    <Link className="text-white mx-10 text-xs py-1 hover:underline" href={'/'}>
                        TWITTER
                    </Link>
                </div>
            </div>
        </footer>
    );
}
