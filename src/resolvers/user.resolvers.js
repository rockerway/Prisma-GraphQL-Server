module.exports = {
  Query: {
    user(parent, args, context) {
      return context.prisma.user({ id: args.userId })
    },
    users(parent, args, context) {
      return context.prisma.users()
    },
  },
  Mutation: {
    createUser(parent, args, context) {
      return context.prisma.createUser(
        {
          name: args.name
        }
      )
    },
    joinCompany(parent, args, context) {
      return context.prisma.updateUser(
        {
          where: { id: args.userId },
          data: {
            companies: {
              connect: { id: args.companyId }
            }
          }
        }
      )
    },
  },
  User: {
    companies(parent, args, context) {
      return context.prisma.user({
        id: parent.id
      }).companies()
    }
  }
}
