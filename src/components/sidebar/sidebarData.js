import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";


export const SidebarData = [
  {
    id: 1,
    name: 'World',
    path: '/section/world',
    subSection: [
      { name:'Africa', path: '/section/world/africa'},
      { name:'Austarlia', path: '/section/world/austarlia'},
      { name:'Americas', path: '/section/world/americas'},
      { name:'Asia Pacific', path: '/section/world/asia'},
      { name:'Canada', path: '/section/world/canada'},
      { name:'Americas', path: '/section/world/americas'},
      { name:'Europe', path: '/section/world/europe'},
      { name:'Middle East', path: '/section/world/middleeast'}
    ]
  },
  {
    id: 2,
    name: 'Business',
    path: '/section/business',
    subSection: [
      { name:'DealBook', path: '/section/business/dealbook'},
      { name:'Economy', path: '/section/business/economy'},
      { name:'Energy', path: '/section/business/energy-environment'},
      { name:'Markets', path: '/section/markets-overview'},
      { name:'Media', path: '/section/business/media'},
      { name:'Small Business', path: '/section/business/small-business'},
      { name:'Your Money', path: '/section/your-money'},
      { name:'Automotive', path: '/section/automobiles'},
    ]
  },
  {
    id: 3,
    name: 'Politics',
    path: '/section/politics',
    subSection: ''
  },
  {
    id: 4,
    name: 'U.S.',
    path: '/section/us',
    subSection: [
      { name:'Education', path: '/section/education'},
    ]
  },
  {
    id: 5,
    name: 'Sports',
    path: '/section/sports',
    subSection: [
      { name: 'MLB', path: '/section/sports/baseball'},
      { name: 'NBA', path: '/section/sports/basketball'},
      { name: 'NFL', path: '/section/sports/football'},
      { name: 'NHL', path: '/section/sports/hokey'},
      { name: 'NCAA Basketball', path: '/section/sports/ncaabasketball'},
      { name: 'NCAA Football', path: '/section/sports/ncaafootball'},
      { name: 'Golf', path: '/section/sports/golf'},
      { name: 'Soccer', path: '/section/sports/soccer'},
      { name: 'Tennis', path: '/section/sports/tennis'}
    ]
  },
  {
    id: 6,
    name: 'Health',
    path: '/section/health',
    subSection: [
      { name: 'Money & Policy', path: '/section/health/policy'},
      { name: 'Health Guide', path: '/section/healt/well'},
    ]
  },
  {
    id: 7,
    name: 'Sports',
    path: '/section/sports',
    subSection: ''
  },
  {
    id: 8,
    name: 'Opinion',
    path: '/section/opinion',
    subSection: [
      { name: 'Columnists', path: '/section/opinion/columnist'},
      { name: 'Editorials', path: '/section/opinion/editorials'},
      { name: 'Guest Essays', path: '/section/opinion/contributors'},
      { name: 'Letters', path: '/section/opinion/letters'},
      { name: 'Sunday Review', path: '/section/opinion/sunday'},
    ]
  },
  {
    id: 9,
    name: 'Tech',
    path: '/section/technology',
    subSection: [
      { name: 'Personal Tech', path: '/section/sports/personaltech'},
    ]
  },
  {
    id: 10,
    name: 'Science',
    path: '/section/science',
    subSection: [
      { name: 'Climate & Environment', path: '/section/science/earth'},
      { name: 'Space & Astronomy', path: '/section/science/space'},
    ]
  },

]