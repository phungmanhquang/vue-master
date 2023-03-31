const employee1 = { firstName: "Join", lastName: "Rodson" };
const employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

// call sẽ gọi một hàm với giá trị this và các đối số được truyền lần lượt
console.log("call :::")
invite.call(employee1, "Hello", "how are you?")
invite.call(employee2, "Hello", "how are you?")

// apply sẽ gọi một hàm với giá trị this được truyền vào và các đối số sẽ là 1 mảng
console.log("apply :::")
invite.apply(employee1, ['Hello', 'how are you?'])
invite.apply(employee2, ['Hello', 'how are you?'])

// bind sẽ trả ra 1 hàm mới với this được truyền vào
console.log("bind :::");
const inviteEmployee1 = invite.bind(employee1)
const inviteEmployee2 = invite.bind(employee2)
inviteEmployee1("Hello 1", "how are you? 1")
inviteEmployee2("Hello", "how are you?")
