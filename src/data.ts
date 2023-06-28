const Waving_Hand = ['👋', '👋🏼', '👋🏽', '👋🏾', '👋🏿']
const Raised_Back_Of_Hand = ['🤚🏼', '🤚🏻', '🤚🏽', '🤚🏾', '🤚🏿']
const Hand_with_Fingers_Splayed = ['🖐️', '🖐🏼', '🖐🏽', '🖐🏾', '🖐🏿']
const Raised_Hand = ['✋🏻', '✋🏻', '✋🏽', '✋🏾', '✋🏿']
const Vulcan_Salute = ['🖖', '🖖🏼', '🖖🏽', '🖖🏽', '🖖🏿']
const Rightwards_Hand = ['🫱', '🫱🏼', '🫱🏽', '🫱🏾', '🫱🏿']
const Leftwards_Hand = ['🫲', '🫲🏼', '🫲🏽', '🫲🏾', '🫲🏿']
const Palm_Down_Hand = ['🫳', '🫳🏼', '🫳🏽', '🫳🏾', '🫳🏿']
const Palm_Up_Hand = ['🫴', '🫴🏼', '🫴🏼', '🫴🏾', '🫴🏿']

export const data = [
  ...transfer(':Waving Hand', Waving_Hand),
  ...transfer(':Raised Back of Hand', Raised_Back_Of_Hand),
  ...transfer(':Hand with Fingers Splayed', Hand_with_Fingers_Splayed),
  ...transfer(':Raised Hand', Raised_Hand),
  ...transfer(':Vulcan Salute', Vulcan_Salute),
  ...transfer(':Rightwards Hand', Rightwards_Hand),
  ...transfer(':Leftwards Hand', Leftwards_Hand),
  ...transfer(':Palm Down Hand', Palm_Down_Hand),
  ...transfer(':Palm Up Hand', Palm_Up_Hand),
]

function transfer(base: string, data: any) {
  return [
    [`${base}`, data[0]],
    [`${base}: Medium-Light Skin Tone`, data[1]],
    [`${base}: Medium Skin Tone`, data[2]],
    [`${base}: Medium-Dark Skin Tone`, data[3]],
    [`${base}: Dark Skin Tone`, data[4]],
  ]
}
