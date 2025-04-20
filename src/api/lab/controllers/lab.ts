/**
 * lab controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::lab.lab', ({ strapi }) => ({
  async find(ctx) {
    const { documentId } = ctx.query;

    if (documentId) {
      const labs = await strapi.entityService.findMany('api::lab.lab', {
        populate: ['users_permissions_users', 'lab_submission_records'],
        filters: {
          users_permissions_users: {
            documentId: {
              $eq: documentId,
            },
          },
        } as any,
      });

      return this.transformResponse(labs);
    }

    return await super.find(ctx);
  },
}));
