export const module = {
    rules: [
        { test: /.jsonc$/, use: [{ loader: `jsonc-loader` }] }
    ]
};