describe('ServeRest API Automation', () => {
  const apiUrl = Cypress.env('apiUrl')

  it('Scenario 1: New user registration', () => {
    const user = {
      nome: `User API ${Date.now()}`,
      email: `api_user_${Date.now()}@test.com`,
      password: 'password',
      administrador: 'true'
    }

    cy.request('POST', `${apiUrl}/usuarios`, user).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.message).to.eq('Cadastro realizado com sucesso')
    })
  })

  it('Scenario 2: Login with success', () => {
    const userLogin = {
      nome: 'Login User',
      email: `login_api_${Date.now()}@test.com`,
      password: 'password',
      administrador: 'true'
    }

    cy.request('POST', `${apiUrl}/usuarios`, userLogin).then(() => {
      cy.request('POST', `${apiUrl}/login`, {
        email: userLogin.email,
        password: userLogin.password
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.message).to.eq('Login realizado com sucesso')
        expect(response.body).to.have.property('authorization')
      })
    })
  })

  it('Scenario 3: List users and validate response', () => {
    cy.request('GET', `${apiUrl}/usuarios`).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('usuarios')
      expect(response.body.usuarios).to.be.an('array')
    })
  })

  it('Scenario 4: Create a new product (with admin token)', () => {
    // Isolated token generation for this test
    const admin = {
      nome: 'Admin Product',
      email: `admin_prod_${Date.now()}@test.com`,
      password: 'password',
      administrador: 'true'
    }

    cy.request('POST', `${apiUrl}/usuarios`, admin).then(() => {
      cy.request('POST', `${apiUrl}/login`, {
        email: admin.email,
        password: admin.password
      }).then((loginRes) => {
        const token = loginRes.body.authorization
        const product = {
          nome: `Product API ${Date.now()}`,
          preco: 100,
          descricao: 'Description',
          quantidade: 50
        }

        cy.request({
          method: 'POST',
          url: `${apiUrl}/produtos`,
          body: product,
          headers: { Authorization: token }
        }).then((response) => {
          expect(response.status).to.eq(201)
          expect(response.body.message).to.eq('Cadastro realizado com sucesso')
        })
      })
    })
  })

  it('Scenario 5: List products and validate response', () => {
    cy.request('GET', `${apiUrl}/produtos`).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('produtos')
      expect(response.body.produtos).to.be.an('array')
    })
  })

  it('Scenario 6: Delete a user', () => {
    const userToDelete = {
      nome: 'Delete Me',
      email: `delete_${Date.now()}@test.com`,
      password: 'password',
      administrador: 'false'
    }

    cy.request('POST', `${apiUrl}/usuarios`, userToDelete).then((response) => {
      const id = response.body._id
      cy.request('DELETE', `${apiUrl}/usuarios/${id}`).then((delResponse) => {
        expect(delResponse.status).to.eq(200)
        expect(delResponse.body.message).to.eq('Registro excluído com sucesso')
      })
    })
  })
})
