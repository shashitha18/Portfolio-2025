import React, { useState, useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative lg:hidden">
      {/* Hamburger Button */}
      <label
        ref={buttonRef}
        className="flex items-center justify-between bg-darkviolet text-white font-bold  rounded-lg cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative size-8 flex items-center justify-center">
          <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="w-6 relative"
          >
            {/* Top Line */}
            <motion.span
              className="absolute w-full h-[3px] bg-white rounded"
              variants={{
                closed: { rotate: 0, y: -8 },
                open: { rotate: 45, y: 0 },
              }}
              transition={{ duration: 0.3 }}
            />
            {/* Middle Line */}
            <motion.span
              className="absolute w-full h-[3px] bg-white rounded"
              variants={{
                closed: { rotate: 0, opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.3 }}
            />
            {/* Bottom Line */}
            <motion.span
              className="absolute w-full h-[3px] bg-white rounded"
              variants={{
                closed: { rotate: 0, y: 8 },
                open: { rotate: -45, y: 0 },
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </label>

      {/* Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.section
            ref={menuRef}
            className="absolute w-[200px] right-0 top-12 px-2 text-2xl  bg-black text-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.4, y: -40, x: 20 }}
            animate={{ opacity: 1, scale: 1, y: 10, x: -10 }}
            exit={{ opacity: 0, scale: 0.1, y: -110, x: 80 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.div
              className="p-2 hover:bg-gray-200 transition active:text-[#93E508]"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0, y: -40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              Home
            </motion.div>
            <div className="border-b border-gray-600"></div>
            <motion.div
              className="p-2 hover:bg-gray-200 transition active:text-[#93E508]"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0, y: -40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              Service
            </motion.div>
            <div className="border-b border-gray-600"></div>
            <motion.div
              className="p-2 hover:bg-gray-200 transition active:text-[#93E508]"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0, y: -40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              Education
            </motion.div>
            <div className="border-b border-gray-600"></div>
            <motion.div
              className="p-2 hover:bg-gray-200 transition active:text-[#93E508]"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0, y: -40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 0 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
            >
              About
            </motion.div>
            <div className="border-b border-gray-600"></div>
            <motion.div
              className="p-2 hover:bg-gray-200 transition active:text-[#93E508]"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0, y: -40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              Contact
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
