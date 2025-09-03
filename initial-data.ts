import { BankType, FundingStrategy, PartnerTestData } from "../../utils/user";

/**
 * Collection of partner test data configurations organized by funding strategy and bank type
 * Note: clientId and clientSecret are omitted here and will be populated from environment variables
 * when needed by getPartnerTestData function
 */
export const PartnerConfigurations: Record<
  FundingStrategy,
  Record<BankType, Partial<PartnerTestData>>
> = {
  [FundingStrategy.EMPLOYER]: {
    [BankType.GATEWAY]: {
      // Static configuration values (excluding sensitive data)
      benefitIdHsa: '2efc1d11-df91-4fcc-a638-177693b98c17',
      memberId: 'uNnqHsCIubg2eM32OuSuj4Scfir2',
      superAdminId: 'J2TeKMUDnFaTngnzmaUc4IbB1ad2',
      adminId: 'EoiqvHIHfOX6AZbDvgrrecEhWB13',
    },
    [BankType.OMNIBUS]: {
      // Static configuration values (excluding sensitive data)
      benefitIdHsa: '12714c7d-0ce8-4512-bd99-3b955f60b0d6',
      memberId: 'VbWDZGGyGOdo7xILc5Z8Qo1WTU82',
      superAdminId: 'x0AimsxhIMdRARoe5Vl4r0t77S73',
      adminId: 'XnzE1ead7QPZ65HdbQrpAh2aOwG3',
    },
  },
  [FundingStrategy.PARTNER]: {
    [BankType.GATEWAY]: {
      // Static configuration values (excluding sensitive data)
      benefitIdHsa: '3f6964a8-f08b-42b4-a6fd-934c8ab47246',
      memberId: 'psIzd2rLZcOCof0PBTunhmvb16i1',
      superAdminId: 'yiv9VlrmnDQp29xSNHqMQL8xUb13',
      adminId: 'EJEiezMW5QSoIPyp7PSotkJotD73',
    },
    [BankType.OMNIBUS]: {
      // Static configuration values (excluding sensitive data)
      benefitIdHsa: '2f714aa6-ba5c-42dd-9a4d-4c246956ae59',
      memberId: 'RCXrcBqmDrh2MYjRdfkFe2Chulo2',
      superAdminId: 'ua3zZwHPxdfDZCXPkP0DGxBKkcQ2',
      adminId: 'UtvDrgGH0cYNG0XFgdY8CVnJUd43',
    },
  },
}
