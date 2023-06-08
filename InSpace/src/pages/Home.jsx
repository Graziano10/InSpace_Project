import Footer from "../components/bundles/footer/Footer";
import Header from "../components/bundles/header/Header";
import Section01 from "../components/bundles/header/Section01";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <Header />
        <Section01 />
        <Footer />
      </div>
    </motion.div>
  );
};

export default Home;
