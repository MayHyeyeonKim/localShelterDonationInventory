import DonationShelter from '../models/donationShelter.js';

export const getDonationReports = async (req, res) => {
  try {
    // 기부 현재 상태를 유형별로 그룹화
    const donationStatusByType = await DonationShelter.aggregate([
      {
        $group: {
          _id: '$donationType',
          donation_count: { $sum: 1 },
          total_amount: { $sum: '$amount' },
        },
      },
    ]);

    // 각 기부자로부터 받은 총 기부금을 요약한 기부자 보고서
    const donationDonorSummaryReport = await DonationShelter.aggregate([
      {
        $group: {
          _id: '$donorName',
          total_donation_amount: { $sum: '$amount' },
        },
      },
    ]);

    res.json({ donationStatusByType, donationDonorSummaryReport });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
