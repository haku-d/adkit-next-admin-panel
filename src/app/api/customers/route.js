import { headers } from 'next/headers';

export async function GET(request) {
  const headersList = headers();
  const referer = headersList.get('referer');

  return Response.json(
    {
      data: [
        {
          id: 1,
          customerName: 'Max Minsen',
          email: 'max.minsen@gmail.com',
          companyName: 'jsx.group',
          customerType: 'Individual',
          workPhone: '',
          mobile: '',
          website: '',
        },
        {
          id: 2,
          customerName: 'John Black',
          email: 'john.black@gmail.com',
          companyName: 'jsx.group',
          customerType: 'Business',
          workPhone: '',
          mobile: '',
          website: '',
        },
        {
          customerName: 'Lana Shelton',
          email: 'enim@icloud.couk',
          workPhone: '(543) 487-4067',
          companyName: 'Dapibus Institute',
          id: 'B7E2039D-52EB-11D4-D6B7-28E19CFA994F',
          customerType: 'Individual',
        },
        {
          customerName: 'Cairo Hodge',
          email: 'in.hendrerit@yahoo.edu',
          workPhone: '(792) 674-4844',
          companyName: 'Vivamus Non Lorem LLC',
          id: '86029CAA-A697-38A2-94FE-985DFCE673D1',
          customerType: 'Business',
        },
        {
          customerName: 'Travis Briggs',
          email: 'nullam.feugiat.placerat@yahoo.edu',
          workPhone: '(849) 463-1172',
          companyName: 'Magna A Inc.',
          id: '2D6AA08E-ACA2-3B22-C547-C32ABBE215E5',
          customerType: 'Business',
        },
        {
          customerName: 'Gabriel Combs',
          email: 'aliquet.nec@icloud.com',
          workPhone: '(506) 426-4427',
          companyName: 'Malesuada Integer Id Consulting',
          id: '2A178C4C-1DA7-6DB2-6A1F-2176258C3EBC',
          customerType: 'Individual',
        },
        {
          customerName: 'Lydia Banks',
          email: 'nullam.ut@protonmail.ca',
          workPhone: '(420) 257-6479',
          companyName: 'Libero Donec Corporation',
          id: '601A5431-627F-5D2E-17A1-775A6B25729E',
          customerType: 'Individual',
        },
        {
          customerName: 'Martena Gilbert',
          email: 'semper.cursus.integer@outlook.com',
          workPhone: '1-470-207-1877',
          companyName: 'Nunc Sed Orci Foundation',
          id: '82D4DF80-461B-D956-C845-636ABE156938',
          customerType: 'Individual',
        },
        {
          customerName: 'Armand Ochoa',
          email: 'praesent@aol.edu',
          workPhone: '(222) 241-8250',
          companyName: 'Eu Ltd',
          id: '2121C9D1-AEE4-E04C-17B6-DEDF13C7A191',
          customerType: 'Business',
        },
        {
          customerName: 'Lunea Petersen',
          email: 'tellus.id@yahoo.net',
          workPhone: '(158) 188-6014',
          companyName: 'Congue Corporation',
          id: 'E997C8A4-B016-2271-481C-C47786AE16D8',
          customerType: 'Business',
        },
        {
          customerName: 'Travis Fulton',
          email: 'ultrices.vivamus@protonmail.ca',
          workPhone: '(434) 792-3141',
          companyName: 'Cubilia Inc.',
          id: 'B0B79CB6-B7A3-BBCD-FE41-532FE11E8B9D',
          customerType: 'Individual',
        },
        {
          customerName: 'Wade Valentine',
          email: 'malesuada.id@protonmail.couk',
          workPhone: '(254) 383-0533',
          companyName: 'Neque Institute',
          id: 'C772F827-EC48-76E9-E342-513241FB605F',
          customerType: 'Individual',
        },
        {
          customerName: 'Haviva Hunter',
          email: 'purus.in.molestie@protonmail.net',
          workPhone: '(568) 279-4402',
          companyName: 'Adipiscing Lacus Inc.',
          id: 'D5FA8B88-C936-668B-FD6C-C68FD5E067F3',
          customerType: 'Individual',
        },
        {
          customerName: 'Katell Flores',
          email: 'laoreet@google.couk',
          workPhone: '1-583-675-6714',
          companyName: 'Vestibulum Neque Corporation',
          id: 'B96C8117-102B-5AAC-E126-A1D1F7A4244C',
          customerType: 'Business',
        },
        {
          customerName: 'Byron Hopper',
          email: 'cras.dictum@protonmail.ca',
          workPhone: '(120) 687-0146',
          companyName: 'Congue A LLP',
          id: '7207D265-0BBE-BF42-27B8-887316AC4748',
          customerType: 'Business',
        },
        {
          customerName: 'Blythe Prince',
          email: 'libero@icloud.edu',
          workPhone: '1-624-543-1133',
          companyName: 'Cras Vulputate Inc.',
          id: '9096D634-2833-FA70-6F87-FD22673D0B13',
          customerType: 'Individual',
        },
      ],
      meta: {
        itemCount: 12,
        page: 1,
      },
    },
    {
      status: 200,
      headers: { referer: referer },
    },
  );
}