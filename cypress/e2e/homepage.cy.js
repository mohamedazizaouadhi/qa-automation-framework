/// <reference types="cypress" />

/**
 * Test Suite: Homepage & Navigation
 * Application: https://automationexercise.com
 * Author: Mohamed Aziz Aouadhi
 */

describe('Homepage & Navigation', () => {

  beforeEach(() => {
    cy.visit('https://automationexercise.com')
  })

  it('should load the homepage successfully', () => {
    cy.title().should('eq', 'Automation Exercise')
    cy.get('.logo img').should('be.visible')
  })

  it('should display the navigation bar correctly', () => {
    cy.get('#header').should('be.visible')
    cy.contains('a', 'Home').should('be.visible')
    cy.contains('a', 'Products').should('be.visible')
    cy.contains('a', 'Cart').should('be.visible')
    cy.contains('a', 'Signup / Login').should('be.visible')
  })

  it('should display the slider/banner on homepage', () => {
    cy.get('#slider').should('be.visible')
  })

  it('should display featured products section', () => {
    cy.get('.features_items').should('be.visible')
    cy.get('.product-image-wrapper').should('have.length.greaterThan', 0)
  })

  it('should navigate to Products page from navbar', () => {
    cy.contains('a', 'Products').click()
    cy.url().should('include', '/products')
    cy.contains('h2', 'All Products').should('be.visible')
  })

  it('should navigate to Cart page from navbar', () => {
    cy.contains('a', 'Cart').click()
    cy.url().should('include', '/view_cart')
    cy.get('#cart_info').should('be.visible')
  })

  it('should navigate to Login page from navbar', () => {
    cy.contains('a', 'Signup / Login').click()
    cy.url().should('include', '/login')
    cy.contains('h2', 'Login to your account').should('be.visible')
  })

  it('should display footer with subscription section', () => {
    cy.scrollTo('bottom')
    cy.get('#footer').should('be.visible')
    cy.contains('Subscription').should('be.visible')
    cy.get('#susbscribe_email').should('be.visible')
  })

  it('should subscribe with valid email in footer', () => {
    cy.scrollTo('bottom')
    cy.get('#susbscribe_email').type('test.automation@example.com')
    cy.get('#subscribe').click()
    cy.contains('You have been successfully subscribed!').should('be.visible')
  })

  it('should scroll to top with arrow button', () => {
    cy.scrollTo('bottom')
    cy.get('#scrollUp').click({ force: true })
    cy.get('#slider').should('be.visible')
  })

})
