// Lớp đại diện cho một node trong DSLK
class MyNode {
    data: number; // Dữ liệu của node
    next: MyNode | null; // Con trỏ next: Lưu node kế tiếp (MyNode) hoặc không có node nào (null)

    constructor(data: number, next: MyNode | null = null) {
        this.data = data;
        this.next = next;
    }

    // In data
    print() {
        console.log(this.data);
    }
}

// Lớp đại diện cho một danh sách liên kết
class SinglyLinkedList {
    head: MyNode | null; // Con trỏ head: Quản lý node đầu tiên
	tail: MyNode | null; // Con trỏ tail: Quản lý node cuối cùng
    constructor() {
        this.head = this.tail = null; // Khởi tạo bằng một danh sách rỗng
    }

    // In data
    print() {
        let tmp: MyNode|null = this.head;
        while (tmp) {
            tmp.print();
            tmp = tmp.next;
        }
    }

    // Thêm node vào đầu DSLK
    addHead(data: number) {
        let newNode = new MyNode(data);
        if (this.head == null) {
            this.head = this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode; 
        }
    }

    // Thêm node vào cuối DSLK
    addTail(data: number) {
        let newNode = new MyNode(data);
        if (this.head == null) {
            this.head = this.tail = newNode;
        }
        else {
            if (this.tail != null) {
                this.tail.next = newNode    // Thiết lập next của tail là newNode
                this.tail = newNode             // Cập nhật con trỏ tail
            } 
        }
    }

    // Thêm node vào sau một node bất kỳ trong DSLK
    // addAfter(data: number, aNode: MyNode) {
    //     if (aNode != null) {
    //         if (this.head == null) {
    //             this.addHead(data);
    //         }
    //         else if (aNode === this.tail) {
    //             this.addTail(data);
    //         }
    //         else {
    //             let newNode = new MyNode(data); // Tạo node mới
    //             let curr: MyNode | null = this.head;
    //             while (curr != null && curr != this.tail) {
    //                 curr = curr.next;
    //             }
    //             if (curr != null) {
                    
    //             }
    //         }
    //     }
    // }

    // Xóa node đầu tiên DSLK
    removeHead() {
        if (this.head) {
            if (this.head = this.tail) {
                this.head = this.tail = null
            }
            else {
                
            }
        }
    }

    // // Xóa node cuối cùng DSLK
    // removeTail() {
    //     ...
    // }

    // // Xóa node ở vị trí bất kỳ DSLK
    // removeNode(aNode: MyNode) {
    //     ...
    // }
}

function main() {
    //*********************Test bai 2 ***********************/
    console.log("test bai 2");
    // Tạo một node A với data là 3
    let A: MyNode = new MyNode(3);
    // In node A ra màn hình
    console.log(A.data);
    // Tạo một node B với data là 6
    let B: MyNode = new MyNode(6);
    // In node B ra màn hình
    console.log(B.data);
    // Liên kết node A với node B, nghĩa là cho next của A là node B
    A.next = B;
    // In lại node A ra màn hình
    console.log(A.data);

    //*********************Test bai 3 ***********************/
    console.log("test bai 3");
    const list: SinglyLinkedList = new SinglyLinkedList() ;
    list.head = A;
    list.print();

    //*********************Test bai 4 ***********************/
    const list2: SinglyLinkedList = new SinglyLinkedList() ;
    console.log("test bai 4");
    list2.addHead(10);
    list2.addHead(7);
    list2.addHead(8);
    list2.print();

    //*********************Test bai 5 ***********************/
    console.log("test bai 5");
    list2.addTail(20);
    list2.addTail(40);
    list2.addTail(30);
    list2.print();

    //*********************Test bai 6 **********************/
    console.log("test bai 6")

}

main();