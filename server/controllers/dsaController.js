import dsaSheet from "../data/dsaSheet.js";

export const getDsaData = async (req, res) => {
  try {
    const data = dsaSheet;
    res.status(200).json(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching dsaSheet Data", error: error.message });
  }
};

export const getDsaQuestionsById = async (req, res) => {
  try {
    const { _id } = req.params;

    const data = dsaSheet[0].topics.map((topic) => {
      return topic._id === _id ? topic.questions : [];
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching dsaSheet questions by _id",
      error: error.message,
    });
  }
};
