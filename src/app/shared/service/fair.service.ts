import { Injectable } from '@angular/core';
import { Ifairs } from '../module/fair';
import { Observable, of } from 'rxjs';
// import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FairService {


  fairsArr: Array<Ifairs> = [
    {
      fairId: '62f63b4caa0bf10009d0d86a',
      fairName: 'ISS Washington DC Fair',
      startDate: 1675922400,
      endDate: 1676181600,
      timezoneId: 'Eastern Standard Time',
      location: {
        addressOne: 'Grand Hyatt Washington',
        addressTwo: '1000 H Street NW',
        city: 'Washington D.C.',
        state: 'Washington D.C.',
        country: 'United States',
        zip: '20001'
      },
      numberOfUsersRegistered: 0,
      numberOfSchoolsRegistered: 39,
      isCandidateRegistered: false,
      bannerUrl: 'https://images.unsplash.com/photo-1465447142348-e9952c393450',
      showRegisteredUsersToCandidate: false,
      showRegisteredUsersToSchools: false,
      showRegisteredSchoolsToCandidate: true,
      showRegisteredSchoolsToSchools: false,
      fairStatus: 'published',
      fairStartTime: '9:00 AM',
      fairEndTime: '1:00 PM',
      type: 'Virtual',
     candidateDescription: `
<b>Welcome Candidates!</b><br><br>
Join the ISS Washington DC Fair to connect with leading universities from around the world. Learn about undergraduate and postgraduate programs, scholarships, visa guidance, and career opportunities. Meet university representatives, ask questions directly, and explore study options that match your academic goals.
`,

schoolDescription: `
<b>For Participating Schools</b><br><br>
Meet talented students from different educational backgrounds who are looking for international study opportunities. Showcase your programs, explain admission requirements, promote scholarships, and build meaningful connections with prospective applicants.
`,
    },
    {
  fairId: '63ab1234cd5678ef90123456',
  fairName: 'London International Education Fair',
  startDate: 1685625600,
  endDate: 1685712000,
  timezoneId: 'Greenwich Mean Time',
  location: {
    addressOne: 'Olympia London',
    addressTwo: 'Hammersmith Road',
    city: 'London',
    state: 'England',
    country: 'United Kingdom',
    zip: 'W14 8UX'
  },
  numberOfUsersRegistered: 120,
  numberOfSchoolsRegistered: 45,
  isCandidateRegistered: true,
  bannerUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
  showRegisteredUsersToCandidate: true,
  showRegisteredUsersToSchools: true,
  showRegisteredSchoolsToCandidate: true,
  showRegisteredSchoolsToSchools: true,
  fairStatus: 'published',
  fairStartTime: '10:00 AM',
  fairEndTime: '4:00 PM',
  type: 'Offline',
 candidateDescription: `
<b>Study in the UK</b><br><br>
Explore top universities in London and discover programs in Engineering, Business, IT, Healthcare, and more. Get information about admissions, scholarships, accommodation, and student life. Learn more at
<a href="https://www.study-uk.britishcouncil.org" target="_blank">Study UK</a>.
`,

schoolDescription: `
<b>Recruit Future Students</b><br><br>
Present your institution to motivated students seeking higher education in the UK. Share information about academic programs, campus facilities, scholarships, and career outcomes while interacting with prospective applicants.
`,
},
{
  fairId: '63ab1234cd5678ef90123457',
  fairName: 'Dubai Career Expo',
  startDate: 1688304000,
  endDate: 1688390400,
  timezoneId: 'Gulf Standard Time',
  location: {
    addressOne: 'Dubai World Trade Centre',
    addressTwo: 'Sheikh Zayed Road',
    city: 'Dubai',
    state: 'Dubai',
    country: 'UAE',
    zip: '00000'
  },
  numberOfUsersRegistered: 250,
  numberOfSchoolsRegistered: 60,
  isCandidateRegistered: false,
  bannerUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c',
  showRegisteredUsersToCandidate: false,
  showRegisteredUsersToSchools: true,
  showRegisteredSchoolsToCandidate: true,
  showRegisteredSchoolsToSchools: false,
  fairStatus: 'upcoming',
  fairStartTime: '9:00 AM',
  fairEndTime: '5:00 PM',
  type: 'Hybrid',
 candidateDescription: `
<b>Build Your Career</b><br><br>
Discover exciting career opportunities in the UAE. Meet recruiters, attend career workshops, improve your resume, and network with professionals from leading organizations. Learn more at
<a href="https://u.ae" target="_blank">UAE Government Portal</a>.
`,

schoolDescription: `
<b>Find Skilled Graduates</b><br><br>
Connect with students and recent graduates interested in working in the UAE. Promote internships, graduate programs, and full-time opportunities while building your employer brand.
`,
},
{
  fairId: '63ab1234cd5678ef90123458',
  fairName: 'Singapore Global Education Fair',
  startDate: 1690896000,
  endDate: 1690982400,
  timezoneId: 'Singapore Standard Time',
  location: {
    addressOne: 'Marina Bay Sands',
    addressTwo: 'Bayfront Avenue',
    city: 'Singapore',
    state: 'Singapore',
    country: 'Singapore',
    zip: '018956'
  },
  numberOfUsersRegistered: 310,
  numberOfSchoolsRegistered: 70,
  isCandidateRegistered: true,
  bannerUrl: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd',
  showRegisteredUsersToCandidate: true,
  showRegisteredUsersToSchools: true,
  showRegisteredSchoolsToCandidate: false,
  showRegisteredSchoolsToSchools: true,
  fairStatus: 'completed',
  fairStartTime: '11:00 AM',
  fairEndTime: '6:00 PM',
  type: 'Offline',
  candidateDescription:'I have completed my BCA and I am interested in pursuing higher education. I want to improve my knowledge, learn new skills, and build a successful career in the IT field I am excited to explore study opportunities in Singapore and gain international exposure.',
  schoolDescription: 'Admission and scholarship opportunities.'
}
  ];

  constructor() { }

  fetchFairs():Observable<Ifairs[]>{
    return of (this.fairsArr)
  }

  fetchFairById(id:string):Observable<Ifairs>{
    let fairObj=this.fairsArr.find(f=>f.fairId===id)!
    return of(fairObj)

  }
}
