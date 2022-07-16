import { AnimatePresence, motion } from "framer-motion";
import { FaHome, FaPerfil, FaBars } from "react-icons/fa"
import { BiCog, BiSearch } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import { NavLink, Route } from "react-router-dom";
import { useState } from "react";

const routes = [
    {
        path: "/client",
        name: "Cliente",
        icon: <FaHome></FaHome>,
    }
    ,
    {
        path: "/settings",
        name: "Ajustes",
        icon: <BiCog></BiCog>,

    },
    {
        path: "/profile",
        name: "Perfil",
        icon: <ImProfile></ImProfile>,

    }

];

const SideBar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toogle = () => setIsOpen(!isOpen);
    const inputAnimation = {
        hidden: {
            with: 0,
            padding: 0,
            opacity: 0,
        },
        show: {
            width: "140px",
            padding: "5px 15px",
            opacity: 1,
            transition: {
                duration: 0.2,
            },
        },

    };
    const showAnimation = {
        hidden: {
            with: 0,
            padding: 0,
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
        show: {
            width: "auto",

            opacity: 1,
            transition: {
                duration: 0.2,
            },
        },

    };
    return (
        <div className="main-container">
            <motion.div animate={{ width: isOpen ? "250px" : "35px",transition:
        {
            duration:0.2,
            type:"spring",
            damping:10,
        } }} className="sidebar">


                <div className="top_section">
                    {isOpen && (<motion.h1 variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden" className="logo">Bienvenido </motion.h1>)}
                    <div className="bars">
                        <FaBars onClick={toogle} />
                    </div>
                </div>
                <div className="search">
                    <div className="search_icon">
                        <BiSearch />
                    </div>
                    <AnimatePresence>
                        {isOpen && (<motion.input initial="hidden"
                            animate="show"
                            exit="hidden"
                            variants={inputAnimation}
                            placeholder="search..." />
                        )}
                    </AnimatePresence>

                </div>

                <section className="routes">
                    {routes.map((route) => (
                        <NavLink to={route.path} key={route.name} className="link" activateClassName="active">
                            <div className="icon">{route.icon} </div>
                            <AnimatePresence>
                                {isOpen && (
                                    < motion.div variants={showAnimation}
                                        initial="hidden"
                                        animate="show"
                                        exit="hidden"
                                        className="link_text">{route.name}</motion.div>
                                )
                                }
                            </AnimatePresence>


                        </NavLink>
                    ))}

                </section>
            </motion.div>
            <main>{children}</main>
        </div>
    );

}
export default SideBar;