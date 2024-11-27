cat <<EOT > .prettierrc.js
module.exports = {
  plugins: [require('@shopify/prettier-plugin-liquid')],
  printWidth: 150,
  trailingComma: 'es5'
};
EOT
