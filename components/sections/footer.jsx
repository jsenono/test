import Link from "next/link"
 
const FooterItem = ({ text, link }) => {
return (
    <li>
        <Link href={link} className="duration-200 hover:text-blue-600 dark:hover:text-blue-500">
            {text}
        </Link>
    </li>
)
}
 
const FooterBlockItem = ({ title, items }) => {
return (
    <div className="space-y-6">
        <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {title}
        </h1>
        <ul className="space-y-3">
            {
                items.map(item => (
                    <FooterItem key={item.id} {...item} />
                ))
            }
        </ul>
    </div>
)
}
 
const footerBlocks = [
{
    id: 1,
    title: "Services",
    items: [
        {
            id: 1,
            text: "Web design",
            link: "#"
        },
        {
            id: 2,
            text: " Consultancy ",
            link: "#"
        },
        {
            id: 3,
            text: "Web Development",
            link: "#"
        },
        {
            id: 4,
            text: "Mobile Development",
            link: "#"
        },
        {
            id: 5,
            text: "Mobile Development",
            link: "#"
        },
    ]
},
{
    id: 2,
    title: "Company",
    items: [
        {
            id: 1,
            text: "About",
            link: "#"
        },
        {
            id: 2,
            text: "Career",
            link: "#"
        },
        {
            id: 3,
            text: "Contact",
            link: "#"
        },
        {
            id: 4,
            text: "Services",
            link: "#"
        },
        {
            id: 5,
            text: "Services",
            link: "#"
        },
    ]
},
{
    id: 3,
    title: "Social",
    items: [
        {
            id: 1,
            text: "Twitter X",
            link: "#"
        },
        {
            id: 2,
            text: "Instagram",
            link: "#"
        },
        {
            id: 3,
            text: "Threds",
            link: "#"
        },
        {
            id: 4,
            text: "Facebook",
            link: "#"
        },
        {
            id: 5,
            text: "Linkedin",
            link: "#"
        },
    ]
},
{
    id: 4,
    title: "Ressources",
    items: [
        {
            id: 1,
            text: "Blog",
            link: "#"
        },
        {
            id: 2,
            text: "Privacy",
            link: "#"
        },
        {
            id: 3,
            text: "Terms",
            link: "#"
        },
        {
            id: 4,
            text: "FAQ",
            link: "#"
        },
    ]
},
]
 
 
const FooterBlock = () => {
return (
    <footer className="bg-white dark:bg-gray-950 text-gray-700 dark:text-gray-300">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="border-t border-t-gray-200 dark:border-t-gray-800 py-16 md:py-20 flex flex-col lg:flex-row gap-14 gap-y-16">
                <div className="w-full lg:w-96 space-y-6">
                    <Link href="#">
                        <span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-800 to-indigo-400 font-bold text-2xl">U</span>
                        Unify-Ui
                    </Link>
                    <p className="max-w-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iusto est quia a
                    </p>
                </div>
                <nav className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-10">
                    {
                        footerBlocks.map(
                            footerBlock => (
                                <FooterBlockItem key={footerBlock.id} {...footerBlock} />
                            )
                        )
                    }
                </nav>
            </div>
        </div>
        <div className="py-3 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-3xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex justify-center text-center">
                <p> © 2023 UnifyUI. All right reserved </p>
            </div>
        </div>
    </footer>
 
)
}
 
export default FooterBlock