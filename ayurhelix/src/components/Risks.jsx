import { motion } from "framer-motion";

const drugClasses = [
  {
    class: "Biguanides",
    examples: ["Metformin"],
    pancreatitisRisk: "Low Risk",
    kidneyImpact: "CKD me risk (lactic acidosis)",
    heartRisk: "Safe",
    reference: "https://pubmed.ncbi.nlm.nih.gov/26880410/"
  },
  {
    class: "DPP-4 Inhibitors",
    examples: ["Sitagliptin", "Linagliptin", "Saxagliptin"],
    pancreatitisRisk: "Moderate Risk",
    kidneyImpact: "Safer for kidneys",
    heartRisk: "Heart failure risk (Saxagliptin)",
    reference: "https://www.nejm.org/doi/full/10.1056/NEJMoa1307684"
  },
  {
    class: "SGLT2 Inhibitors",
    examples: ["Canagliflozin", "Dapagliflozin", "Empagliflozin"],
    pancreatitisRisk: "Moderate Risk",
    kidneyImpact: "Kidney protective",
    heartRisk: "Heart protective",
    reference: "https://www.nejm.org/doi/full/10.1056/NEJMoa1811744"
  },
  {
    class: "Sulfonylureas",
    examples: ["Glimepiride", "Glibenclamide", "Gliclazide"],
    pancreatitisRisk: "No Risk",
    kidneyImpact: "No Direct Impact",
    heartRisk: "Heart Attack & Hypoglycemia Risk",
    reference: "https://care.diabetesjournals.org/content/40/5/706"
  },
  {
    class: "Thiazolidinediones (TZD)",
    examples: ["Pioglitazone", "Rosiglitazone"],
    pancreatitisRisk: "No Risk",
    kidneyImpact: "Fluid retention (CKD risk)",
    heartRisk: "High Heart Failure Risk",
    reference: "https://www.sciencedirect.com/science/article/abs/pii/S0168822718302086"
  },
  {
    class: "GLP-1 Receptor Agonists",
    examples: ["Liraglutide", "Dulaglutide", "Semaglutide"],
    pancreatitisRisk: "High Risk",
    kidneyImpact: "Kidney Protective",
    heartRisk: "Heart Protective",
    reference: "https://onlinelibrary.wiley.com/doi/full/10.1002/dmrr.2835"
  },
  {
    class: "Insulin Therapy",
    examples: ["Regular Insulin", "Basal Insulin (Glargine, Detemir)"],
    pancreatitisRisk: "No Risk",
    kidneyImpact: "No Direct Impact",
    heartRisk: "Hypoglycemia Risk",
    reference: "https://www.bmj.com/content/356/bmj.i4897"
  }
];
export default function MedicationCards() {
  return (
    <div className="px-6 py-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Common Side Effects of Diabetes Medication
      </h2>
      <div className="overflow-x-auto rounded-xl shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Drug Class
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Examples
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Pancrease Impact
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Kidney Impact
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Heart Impact
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Article
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {drugClasses.map((med) => (
              <tr key={med.name} className={`${med.color} transition-all`}>
                <td className="px-6 py-4 text-gray-800 font-medium">
                  {med.class}
                </td>
                <td className="px-6 py-4 text-gray-600">
                  <ul className="list-disc list-inside space-y-1">
                    {med.examples.map((effect) => (
                      <li key={effect}>{effect}</li>
                    ))}
                  </ul>
                </td>
                <td className="px-6 py-4 text-gray-800 font-medium">
                  {med.pancreatitisRisk}
                </td>
                <td className="px-6 py-4 text-gray-800 font-medium">
                  {med.kidneyImpact}
                </td>
                <td className="px-6 py-4 text-gray-800 font-medium">
                  {med.heartRisk}
                </td>
                <td className="px-6 py-4">
                  <a
                    href={med.article}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm hover:underline"
                  >
                    View supporting article →
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
