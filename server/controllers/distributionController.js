import Distribution from '../models/distributionShelter.js';

export const submitDistribution = async (req, res) => {
  const {
    distributionDate,
    distributionLocation,
    donationType,
    quantity,
    amount,
  } = req.body;

  try {
    // MongoDB에 저장할 Distribution 모델의 인스턴스 생성
    const newDistribution = new Distribution({
      distributionDate,
      distributionLocation,
      donationType,
      quantity,
      amount,
    });

    // Distribution 모델을 사용하여 MongoDB에 저장
    const savedDistribution = await newDistribution.save();

    // 저장된 Distribution 데이터를 응답으로 반환
    res.json({ distribution: savedDistribution });
  } catch (error) {
    console.error('Error submitting distribution:', error);
    res.status(500).send('Internal Server Error');
  }
};
