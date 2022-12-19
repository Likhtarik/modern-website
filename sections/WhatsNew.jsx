'use client';



import { motion } from 'framer-motion';
import styles from '../styles';

import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { NewFeatures, TitleText, TypingText } from '../components';
import { exploreWorlds } from '../constants'; // массив из 4 обьектов {id,title,imgUrl}
import { newFeatures } from '../constants'; // массти 2 из 2 обьектов

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
  <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amout: 0.25 }}
      className={`${styles.paddings} mx-auto flex lg:flex-row flex-col gap-8`}>  


          <motion.div 
              variants={fadeIn('left', 'tween', 0.2, 1)}
              className="flex-[0.75] flex justify-center flex-col">  
                  <TypingText title="| Whats New?"/>
                  <TitleText title={<>What's new about Metaversus?</>}/> 
                  <div className='mt-[48px] flex flex-wrap justify-between  gap-[24px] '>
                      {newFeatures.map( (feature) => (
                          <NewFeatures 
                              key={feature.title}
                              {...feature}     // spreed копируем весь обьект
                                                     
                          />                             
                      ) )}
                  </div>
          </motion.div>


          <motion.div 
              variants={planetVariants('left')} 
              className={`flex-1 ${styles.flexCenter}`}>
              <img src="/whats-new.png" alt="whats-new" className="w-[90%] h-[90%]" />
          </motion.div>


  </motion.div>
 
</section>
);

export default WhatsNew;
