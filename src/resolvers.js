const resolvers = {
  Query: {
    user(parent, args, context) {
      return context.prisma.user({ id: args.userId })
    },
    company(parent, args, context) {
      return context.prisma.company({ id: args.companyId })
    },
    users(parent, args, context) {
      return context.prisma.users()
    },
    companies(parent, args, context) {
      return context.prisma.companies()
    }
  },
  Mutation: {
    createUser(parent, args, context) {
      return context.prisma.createUser(
        {
          name: args.name
        }
      )
    },
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
  User: {
    companies(parent, args, context) {
      return context.prisma.user({
        id: parent.id
      }).companies()
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

module.exports = { resolvers };