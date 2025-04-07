import dsaData from "../data/dsaData.js";

export async function getDsaData(req, res) {
  const data = dsaData;
  res.json(data);
}

// export async function getMobileById(req, res) {
//   const mobile = mobilesData.find((m) => m.id === req.params.id);
//   if (!mobile) {
//     return res.status(404).json({ message: "Mobile not found" });
//   }
//   res.json(mobile);
// }
