import config from '../appsettings';

import createCategoryRepository from './categoryRepository';
import createProductRepository from './productRepository';
import createLookupRepository from './lookupRepository';
import createFollowRepository from './followRepository';
import createBrandRepository from './brandRepository';
import createTokenRepository from './tokenRepository';
import createUserRepository from './userRepository';

export default () => ({
    categoryRepository: createCategoryRepository(config),
    productRepository: createProductRepository(config),
    lookupRepository: createLookupRepository(config),
    followRepository: createFollowRepository(config),
    brandRepository: createBrandRepository(config),
    tokenRepository: createTokenRepository(config),
    userRepository: createUserRepository(config)
});
