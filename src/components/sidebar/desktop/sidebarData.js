  //style
  const subMenuContainer = {
    borderRadius: '3px',
    border: '1px solid rgb(204,204,204)',
    boxShadow: 'rgba(0, 0, 0, 0.09) -1px 4px 6px',  
    alignSelf: 'flex-start',
    position: 'absolute',
    left: '90px',
    top: '-50%',
    zIndex: 6,
    padding: '10px 18px',
  }
  
  const lastSubMenuContainer = {
    borderRadius: '3px',
    border: '1px solid rgb(204,204,204)',
    boxShadow: 'rgba(0, 0, 0, 0.09) -1px 4px 6px',  
    alignSelf: 'flex-start',
    position: 'absolute',
    left: '90px',
    top: '-90px',
    zIndex: 6,
    padding: '10px 18px'
  }

export const SidebarData = [
  {
    id:0,
    name: 'Home',
    path: '/',
    cName: subMenuContainer
  },
  {
    id: 1,
    name: 'World',
    path: '/section/world',
    cName: subMenuContainer,
    subSection: [
      { name:'Africa', path: '/section/world/africa'},
      { name:'Australia', path: '/section/world/australia'},
      { name:'Americas', path: '/section/world/americas'},
      { name:'Asia Pacific', path: '/section/world/asia'},
      { name:'Canada', path: '/section/world/canada'},
      { name:'Europe', path: '/section/world/europe'},
      { name:'Middle East', path: '/section/world/middleeast'}
    ]
  },
  {
    id: 2,
    name: 'Business',
    path: '/section/business',
    cName: subMenuContainer,
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
    cName: subMenuContainer,
    subSection: ''
  },
  {
    id: 4,
    name: 'U.S.',
    path: '/section/us',
    cName: subMenuContainer,
    subSection: [
      { name:'Education', path: '/section/education'},
    ]
  },
  {
    id: 5,
    name: 'Sports',
    path: '/section/sports',
    cName: subMenuContainer,
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
    cName: subMenuContainer,
    subSection: [
      { name: 'Money & Policy', path: '/section/health/policy'},
      { name: 'Health Guide', path: '/section/healt/well'},
    ]
  },
  {
    id: 7,
    name: 'Sports',
    path: '/section/sports',
    cName: subMenuContainer,
    subSection: ''
  },
  {
    id: 8,
    name: 'Opinion',
    path: '/section/opinion',
    cName: subMenuContainer,
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
    cName: subMenuContainer,
    subSection: [
      { name: 'Personal Tech', path: '/section/technology/personaltech'},
    ]
  },
  {
    id: 10,
    name: 'Science',
    path: '/section/science',
    cName: subMenuContainer,
    subSection: [
      { name: 'Climate & Environment', path: '/section/science/earth'},
      { name: 'Space & Astronomy', path: '/section/science/space'},
    ]
  },
  {
    id: 11,
    name: 'Arts',
    path: '/section/arts',
    cName: subMenuContainer,
    subSection: [
      { name: 'Art & Design', path: '/section/arts/design'},
      { name: 'Dance', path: '/section/arts/dance'},
      { name: 'Movies', path: '/section/arts/movies'},
      { name: 'Music', path: '/section/arts/music'},
      { name: 'Television', path: '/section/arts/television'},
      { name: 'Theater', path: '/section/arts/theater'},
    ]
  },
  {
    id: 12,
    name: 'Books',
    path: '/section/books',
    cName: subMenuContainer,
    subSection: [
      { name: 'The Book Review', path: '/section/books/review'}
    ]
  },
  {
    id: 13,
    name: 'Style',
    path: '/section/style',
    cName: subMenuContainer,
    subSection: [
      { name: 'Fashion', path: '/section/fashion'},
      { name: 'Men\'s style', path: '/section/mens-style'},
      { name: 'Love', path: '/section/fashion/wedding'},
      { name: 'Self-Care', path: '/section/style/self-care'},
    ]
  },
  {
    id: 14,
    name: 'Food',
    path: '/section/food',
    cName: subMenuContainer,
    subSection: [
      { name: 'Wine, Beer & Cocktail', path: '/section/food/drinks'},
    ]
  },
  {
    id: 15,
    name: 'Travel',
    path: '/section/travel',
    cName: subMenuContainer,
    subSection: ''
  },
  {
    id: 16,
    name: 'Magazine',
    path: '/section/magazine',
    cName: subMenuContainer,
    subSection: ''
  },
  {
    id: 17,
    name: 'T Magazine',
    path: '/section/t-magazine',
    cName: subMenuContainer,
    subSection: [
      { name: 'Design & Interiors', path: '/section/t-magazine/design'},
      { name: 'Food', path: '/section/t-magazine/food'},
      { name: 'Travel', path: '/section/t-magazine/travel'},
      { name: 'Fashion & Beauty', path: '/section/t-magazine/fashion'},
      { name: 'Entertainment', path: '/section/t-magazine/Entertainment'},
      { name: 'Art', path: '/section/t-magazine/art'},
    ]
  },
  {
    id: 18,
    name: 'Real Estate',
    path: '/section/realestate',
    cName: subMenuContainer,
    subSection: [
      { name: 'Mortgage Calculator', path: '/section/realestate/mortgage-calculator'},
      { name: 'The High End', path: '/section/realestate/the-high-end'},
    ]
  },
  {
    id: 19,
    name: 'Obituaries',
    path: '/section/obituaries',
    cName: subMenuContainer,
    subSection: ''
  },
  {
    id: 20,
    name: 'The Upshot',
    path: '/section/upshot',
    cName: subMenuContainer,
    subSection: ''
  },
  {
    id: 21,
    name: 'Headway',
    path: '/section/headway',
    cName: subMenuContainer,
    subSection: ''
  },
  {
    id: 22,
    name: 'More',
    path: '#',
    cName: lastSubMenuContainer,
    subSection: [
      { name: 'Reader Center', path: '/section/reader-center'},
      { name: 'Parenting', path: '/section/parenting'},
      { name: 'The Learning Network', path: '/section/learning'},
      { name: 'Today\'\s Paper', path: '/section/todayspaper'},
      { name: 'Jobs', path: '/section/jobs'},
      { name: 'Corrections', path: '/section/corrections'},
    ]
  },
]