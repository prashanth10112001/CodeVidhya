import languageData from "../data/languageData.js";

export async function getLanguages(req, res) {
  const data = languageData;
  res.json(data);
}

// export async function getMobileById(req, res) {
//   const mobile = mobilesData.find((m) => m.id === req.params.id);
//   if (!mobile) {
//     return res.status(404).json({ message: "Mobile not found" });
//   }
//   res.json(mobile);
// }
