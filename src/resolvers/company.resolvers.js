module.exports = {
  Query: {
    company(parent, args, context) {
      return context.prisma.company({ id: args.companyId })
    },
    companies(parent, args, context) {
      return context.prisma.companies()
    }
  },
  Mutation: {
    createCompany(parent, args, context) {
      return context.prisma.createCompany(
        {
          name: args.name,
          users: {
            connect: { id: args.userId }
          }
        }
      )
    },
    addUser(parent, args, context) {
      return context.prisma.updateCompany(
        {
          where: { id: args.companyId },
          data: {
            users: {
              connect: { id: args.userId }
            }
          }
        }
      )
    }
  },
  Company: {
    users(parent, args, context) {
      return context.prisma.company({
        id: parent.id
      }).users()
    }
  }
}
