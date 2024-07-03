/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        // Ajouter une regle pour gerer le module binaire canvas.node
        config.module.rules.push({ test: /\.node$/, use: 'raw-loader' })

        // Empecher canvas d'etre traité par Next.js dans le navigateur
        if (!isServer) config.externals.push('canvas');
        return config;

    }
};

export default nextConfig;
  