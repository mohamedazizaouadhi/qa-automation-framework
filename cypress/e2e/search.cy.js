/// <reference types="cypress" />

/**
 * Test Suite: Product Search & Filtering
 * Application: https://automationexercise.com
 * Author: Mohamed Aziz Aouadhi
 */

describe('Product Search & Filtering', () => {

  beforeEach(() => {
    cy.visit('https://automationexercise.com/products', { timeout: 30000 })
  })

  it('should display the products page correctly', () => {
    cy.get('.features_items').should('be.visible')
    cy.get('.product-image-wrapper').should('have.length.greaterThan', 0)
    cy.contains('h2', 'All Products').should('be.visible')
  })

  it('should display product name and price for each item', () => {
    cy.get('.product-image-wrapper').each(($item) => {
      cy.wrap($item).find('.productinfo p').should('be.visible')
      cy.wrap($item).find('.productinfo h2').should('be.visible')
    })
  })

  it('should search for a product and display results', () => {
    cy.get('#search_product').type('T-Shirt')
    cy.get('#submit_search').click()
    cy.contains('h2', 'Searched Products').should('be.visible')
    cy.get('.product-image-wrapper').should('have.length.greaterThan', 0)
  })

  it('should show results after searching keyword dress', () => {
    // Verify search returns results (site search is broad by design)
    cy.get('#search_product').type('dress')
    cy.get('#submit_search').click()
    cy.contains('h2', 'Searched Products').should('be.visible')
    cy.get('.product-image-wrapper').should('have.length.greaterThan', 0)
  })

  it('should show no results for unknown product', () => {
    cy.get('#search_product').type('xyznonexistentproduct123')
    cy.get('#submit_search').click()
    cy.contains('h2', 'Searched Products').should('be.visible')
    cy.get('.product-image-wrapper').should('have.length', 0)
  })

  it('should open product detail page on View Product click', () => {
    cy.get('.product-image-wrapper').first().find('a[href*="/product_details/"]').click({ force: true })
    cy.url().should('include', '/product_details/')
    cy.get('.product-information h2').should('be.visible')
    cy.get('.product-information span span').should('be.visible')
  })

  it('should display product details correctly', () => {
    cy.get('.product-image-wrapper').first().find('a[href*="/product_details/"]').click({ force: true })
    cy.get('.product-information h2').should('not.be.empty')
    cy.get('.product-information p').should('be.visible')
    // Verify Add to Cart button is present
    cy.get('.cart').should('be.visible')
  })

  it('should filter products by Women category', () => {
    cy.get('a[href="#Women"]').click()
    cy.get('.panel-body a').first().click()
    cy.get('.features_items').should('be.visible')
    cy.get('.title').should('be.visible')
  })

})