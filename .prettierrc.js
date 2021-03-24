module.exports = {
  bracketSpacing: false,
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',
  importOrder: [
    "^react-native-gesture-handler$",
    "^react$",
    "^react-(.*)$",
    "^@(.*)$",
    "^assets$",
    "^components$",
    "^config$",
    "^containers/(.*)$",
    "^contexts$",
    "^hooks$",
    "^navigations$",
    "^navigations/(.*)$",
    "^screens$",
    "^screens/(.*)$",
    "^services$",
    "^services/(.*)$",
    "^types$",
    "^utils$",
    "^[./]"
  ],
  importOrderSeparation: false,
};