import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { motion } from "framer-motion";

// Our custom easing
let easing = [0.6, -0.05, 0.01, 0.99];

// animate: defines animation
// initial: defines initial state of animation or stating point.
// exit: defines animation when component exits

// Custom variant
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Index = (props) => (
  <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
    <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className="title"
      >
        <div className="grid grid-rows-5 w-full items-center">
          <div className="flex w-2/3 justify-self-center">
            <h1 className="mt-10 text-2xl">Stakeboard</h1>
          </div>
        </div>
      </motion.div>
      <motion.div variants={fadeInUp} className="cards">
        <div className="card-container grid grid-cols-9 grid-rows-20 gap-10 mr-10">
          <div className="col-start-1 lg:col-end-4 col-end-10 row-start-1 row-end-7 p-10 lg:rounded-t-none rounded-3xl bg-purple-dark">
            <span className="text-xl">Related Videos</span>
          </div>
          <div className="col-start-4 lg:col-end-7 col-end-10 row-start-1 row-end-2 p-10 lg:rounded-t-none rounded-3xl bg-purple-dark">
            <span className="text-xl">Popular Stakers</span>
          </div>
          <div className="col-start-7 lg:col-end-10 col-end-10 row-start-1 row-end-5 p-10  lg:rounded-t-none rounded-3xl bg-purple-dark">
            <span className="text-xl">Related Videos</span>
          </div>
          <span className="col-span-2 category">Dashboard menu</span>
        </div>
      </motion.div>
    </div>
  </motion.div>
);

//Index.getInitialProps = async function () {
//  return {
//    product: "Data",
//  };
//};

export default Index;
