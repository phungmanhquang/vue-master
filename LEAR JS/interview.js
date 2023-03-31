// list phones filter by company
const listPhones = [
  { name: "iphone x", company: "apple" },
  { name: "galaxy x", company: "samsung" },
  { name: "iphone y", company: "apple" },
  { name: "nokia x", company: "nokia" },
  { name: "galaxy y", company: "samsung" },
  { name: "nokia y", company: "nokia" },
]

function filterPhones() {
  const objCompany = {
    apple: 2,
    samsung: 1,
    nokia:3
  }
  const res = listPhones.map(phone => ({...phone, companyCode: objCompany[phone.company]})).sort((a,b) => a.companyCode - b.companyCode)

  return res
}

const phonesFilter = filterPhones()

console.log('phonesFilter ', phonesFilter);