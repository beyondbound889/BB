import React from 'react'
import AnimatedCard from './AnimatedCard';
import { motion } from 'framer-motion';
const fadeInFromBottom = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
const Risks = () => {
    const Drugs = [
  {
    name: "Biguanides",
    benefit: "Low risk of pancreatitis; risk of lactic acidosis in CKD patients. Generally safe for heart and kidney function",
    img: "/assets/drug.jpeg",
    url:"https://pubmed.ncbi.nlm.nih.gov/26880410/"
  },
  {
    name: "DPP-4 Inhibitors",
    benefit:
      "Moderate risk of pancreatitis. Safer for kidneys but Saxagliptin may increase heart failure risk",
    img: "/assets/drug.jpeg",
    url:"https://www.nejm.org/doi/full/10.1056/NEJMoa1307684"
  },
  {
    name: "SGLT2 Inhibitors",
    benefit: "Moderate pancreatitis risk. Protective for kidneys and heart",
    img: "/assets/drug.jpeg",
    url:"https://www.nejm.org/doi/full/10.1056/NEJMoa1811744"
  },
  {
    name: "Sulfonylureas",
    benefit:
      "No pancreatitis risk but associated with hypoglycemia and increased heart attack risk. No direct kidney impact",
    img: "/assets/drug.jpeg",
    url:"https://care.diabetesjournals.org/content/40/5/706"
  },
  {
    name: "Thiazolidinediones",
    benefit:
      "No pancreatitis risk but may cause fluid retention and increase CKD risk. High heart failure risk",
    img: "/assets/drug.jpeg",
    url:"https://www.sciencedirect.com/science/article/abs/pii/S0168822718302086"
  },
  {
    name: "GLP-1 Receptor Agonists",
    benefit:
      "High pancreatitis risk but protective for kidneys and heart",
    img: "/assets/drug.jpeg",
    url:"https://onlinelibrary.wiley.com/doi/full/10.1002/dmrr.2835"
  },
  {
    name: "Insulin Therapy",
    benefit:
      "No pancreatitis risk but hypoglycemia is a concern. No direct impact on kidney or heart function",
    img: "/assets/drug.jpeg",
    url:"https://www.bmj.com/content/356/bmj.i4897"
  },
];
  return (
    <div className='bg-white p-15'>
        <motion.h2
            variants={fadeInFromBottom}
            className="bg-white mt-5 text-[#216041] text-center text-2xl md:text-3xl font-bold mb-4 font-['Source_Serif_4']"
          >
            Common Side Effects of Diabetes Medication
          </motion.h2>
        <div className="flex flex-wrap gap-8 mx-auto p-10 bg-white">
                    {Drugs.map((item, index) => (
                      <a href={item.url} target='_blank'><AnimatedCard item={item} index={index} key={index} /></a>
                    ))}
                  </div>
    </div>
  )
}

export default Risks