var tenDN
var pass 
var dem

function dangky(){
    let user = document.getElementById("username").value
    let regexuser = /^[A_Za-z0-9]{6,15}$/
    let erruse =document.getElementById("erruser")
    if(user.trim()=="")
    {
      erruse.innerHTML = "* không được rỗng"
      return false
    }
    if(!regexuser.test(user))
    {
        erruse.innerHTML = "* Bắt buộc, gồm (6-15 kí tự) chữ và số"
        return false
    }
    erruse.innerHTML ="(*)"
    tenDN = user

    let sdt = document.getElementById("sdt").value
    let regexsdt = /^[0][3-9]{1}[0-9]{8}$/
    let errsdt =document.getElementById("errsdt")
    if(sdt.trim() == "" || !regexsdt.test(sdt))
    {
            errsdt.innerHTML = "* Bắt đầu từ 0(3-9), gồm 10 kí tự số"
            return false
    }
    errsdt.innerHTML ="(*)"


    let email = document.getElementById("email").value;
        let regexMail = /^[A-Za-z0-9]{1,}\@gmail\.com$/;
        let errmail = document.getElementById("erremail");
        if ( !regexMail.test(email)) {
          erremail.innerHTML = "(không đúng định dạng)";
          return false;
        }
        errmail.innerHTML = "(*)";

     let matkhau = document.getElementById("password").value
        let regexmatkhau = /^[A_Za-z0-9]{6,15}$/
            let errorMK = document.getElementById("errpassword")
            if (matkhau.trim() == "" || !regexmatkhau.test(matkhau)) {
                errorMK.innerHTML = "* Gồm chữ và số"
                return false
            }
            errorMK.innerHTML ="(*)"
    let matkhauagain = document.getElementById("againpassword").value
        let errorMKa = document.getElementById("erremailagain")
        if (matkhauagain != matkhau) {
            errorMKa.innerHTML = "* Không trùng khớp"
            return false
        }
        pass=matkhau
        errorMKa.innerHTML ="(*)"
    
        if (user && sdt && email && matkhau && matkhauagain) 
            alert('                                                                                 ĐĂNG KÝ THÀNH CÔNG !')
       
}
function dangnhap()
{
    let ten = document.getElementById("login-username").value
    let errtenDN = document.getElementById("errtenDN")
    if(ten != tenDN)
    {
        errtenDN.innerHTML=" * Tên đăng nhập không đúng"
        return false
    }
    errtenDN.innerHTML="(*)"

    let pas =document.getElementById("login-password").value
    let errpas = document.getElementById("errpass")
    if(pas != pass)
    {
        errpass.innerHTML = "* Mật khẩu không đúng !"
        return false
    }
    errpass.innerHTML = "(*)"

    if(ten && pas){
      dem = 1
        alert('                                                                     ĐĂNG NHẬP THÀNH CÔNG !')
        return true
    }

}
function themVaoGioHang() {
        
    var thongBao = document.getElementById("thongBaoGioHang");
    thongBao.style.display = "block";

    
    setTimeout(function () {
      thongBao.style.display = "none";
    }, 3000);
  }
function confirmPurchase() {
    
    var productName = document.getElementById("buyModalLabel").innerText;
    var quantity = document.getElementById("quantity").value;

    
    var unitPrice = window.unitPrice;

    
    window.location.href = "trangtrang.html?product=" + encodeURIComponent(productName) + "&quantity=" + encodeURIComponent(quantity) + "&unitPrice=" + encodeURIComponent(unitPrice);
}

  function setProductName(productName) {
    document.getElementById("buyModalLabel").innerText = productName;
  }
  function setProductInfo(productName, unitPrice) {
    document.getElementById("buyModalLabel").innerText = productName;
    document.getElementById("unitPrice").innerText = unitPrice;

    
    window.unitPrice = unitPrice;
  }
  function giohang()
  {
    alert('ĐÃ THÊM SẢN PHẨM VÀO GIỎ HÀNG !!!')
  }
  function subcrise()
  {
    let sub = document.getElementById("sub").value
    if(sub.trim()=="")
    {
      alert('Vui lòng nhập thông tin !!!')
      return false
    }
    else
    {
      alert('Đăng ký thành công !!!')
    }
  }
  function kiemtradangnhap()
  {
    if(dem != 1)
    {
      alert("Vui lòng đăng nhập để mua hàng !!!")
      return false
    }
    $('#orderButton').modal('show')
  }





