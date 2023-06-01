import ButtonAtom from "../components/atoms/ButtonAtom";
import {motion} from 'framer-motion'
const ExplorPlanets = () => {

    return(
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}>
             <div>
            <h1>ExplorPlanets</h1>
            <ButtonAtom variant='primary'/>
            <ButtonAtom variant='secondary'/>
        </div>
        </motion.div>
       
    );
};

export default ExplorPlanets;