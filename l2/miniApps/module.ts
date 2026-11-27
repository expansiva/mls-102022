/// <mls fileReference="_102022_/l2/miniApps/module.ts" enhancement="_blank" />
import type { MasterFrontendModuleFrontendDefinition } from '/_102029_/l2/contracts/bootstrap.js';

// One entry per mini app in BOTH lists:
// - navigation[].id must equal the page file name: the Studio opens miniApps/web/desktop/page11/<id>.ts.
// - routes[] is what the Runtime serves; a module without routes is dropped from the published app.
export const moduleFrontendDefinition: MasterFrontendModuleFrontendDefinition = {
  pageTitle: 'Mini Apps',
  device: 'desktop',
  navigation: [
    { id: 'tipCalculator', label: 'Tip Calculator', href: '/miniApps/tipCalculator', description: 'Work out the tip and split the bill' },
    { id: 'timeConverter', label: 'Time Converter', href: '/miniApps/timeConverter', description: 'Convert between hours, minutes and seconds' },
    { id: 'passwordStrengthChecker', label: 'Password Strength Checker', href: '/miniApps/passwordStrengthChecker', description: 'Check how strong a password is' },
    { id: 'shopeeFeeCalculator', label: 'Shopee Fee Calculator', href: '/miniApps/shopeeFeeCalculator', description: 'Marketplace fees, profit and margin for a sale' },
    { id: 'monthlySales', label: 'Monthly Sales', href: '/miniApps/monthlySales', description: 'Sales totals by month from a CSV' },
  ],
  routes: [
    {
      path: '/miniApps/tipCalculator',
      aliases: ['/miniApps', '/miniApps/index.html'],
      entrypoint: '/_102022_/l2/miniApps/web/desktop/page11/tipCalculator.js',
      tag: 'mini-apps--web--desktop--page11--tip-calculator-102022',
      title: 'Tip Calculator',
    },
    {
      path: '/miniApps/timeConverter',
      entrypoint: '/_102022_/l2/miniApps/web/desktop/page11/timeConverter.js',
      tag: 'mini-apps--web--desktop--page11--time-converter-102022',
      title: 'Time Converter',
    },
    {
      path: '/miniApps/passwordStrengthChecker',
      entrypoint: '/_102022_/l2/miniApps/web/desktop/page11/passwordStrengthChecker.js',
      tag: 'mini-apps--web--desktop--page11--password-strength-checker-102022',
      title: 'Password Strength Checker',
    },
    {
      path: '/miniApps/shopeeFeeCalculator',
      entrypoint: '/_102022_/l2/miniApps/web/desktop/page11/shopeeFeeCalculator.js',
      tag: 'mini-apps--web--desktop--page11--shopee-fee-calculator-102022',
      title: 'Shopee Fee Calculator',
    },
    {
      path: '/miniApps/monthlySales',
      entrypoint: '/_102022_/l2/miniApps/web/desktop/page11/monthlySales.js',
      tag: 'mini-apps--web--desktop--page11--monthly-sales-102022',
      title: 'Monthly Sales',
    },
  ],
};
