import { Card } from '@mui/material'
import React from 'react'
import aboutimg from '../Assets/wallpaper2.jpg'
export default function About() {
  return (
    <div className='about-page'>
      <div className="about-container">
        <div className="about-content">
          <span>TOP SELLING</span>
          <span className='pro'>PRODUCTS</span>
        </div>
        <div className="about-image">
          <img src={aboutimg} alt="" />
        </div>
      </div>
      <div className="about-service">
        <Card className='about-service-card'>
          <h5>Polyhouse Maintenance</h5>
          <span>
            Maintaining a polyhouse, also known as a greenhouse, is crucial to ensure that it continues to provide an optimal environment for plant growth.
          </span>
        </Card>
        <Card className='about-service-card'>
          <h5>Hydroponics</h5>
          <span>
          Hydroponics is a method of growing plants without soil, in which plants receive all of their essential nutrients through a nutrient-rich water solution. In hydroponic systems, plants are typically placed in an inert growing medium, such as perlite, coconut coir, or rock wool, which provides physical support to the plant roots while allowing them to come into contact with the nutrient solution.
          </span>
        </Card>
        <Card className='about-service-card'>
          <h5>Terrace Gardening</h5>
          <span>
          Terrace gardening, also known as rooftop gardening or balcony gardening, refers to the practice of cultivating plants, vegetables, herbs, or flowers on a terrace, rooftop, or balcony. It is a form of urban or small-space gardening that makes use of available elevated outdoor spaces to grow a variety of plants.
          </span>
        </Card>
        <Card className='about-service-card'>
          <h5>Landscape maintenance</h5>
          <span>
          Landscape maintenance refers to the ongoing care and management of outdoor spaces, including gardens, lawns, parks, and other landscaped areas. The primary goal of landscape maintenance is to preserve and enhance the aesthetics, health, and functionality of these outdoor spaces.
          </span>
        </Card>
      </div>
    </div>
  )
}
