new Vue({
    el: '#app',
    data: {
        nome: 'Ana Silva',
        idade: 28,
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg',
        alunos: [],
        carnes: '',
        modalAddAluno: null,
        add: {
          pais: '',
          aluno: '',
          valor: '',
        },
        numPrint: {
          num: 0,
          max: 6
        },
        novo: false,
        novo2: {
          pais: '',
          aluno: '',
          valor: '',
        },
        aluno: ''
    },
    created () {
      this.alunos = JSON.parse(localStorage.getItem('alunos')) ?? []
      console.log(this.alunos)
    },
    mounted () {
      const that = this
      // this.modalAddAluno = aluno
      $('#novo-aluno').on('submit', function(e){
        // validation code here
        e.preventDefault();
        if(that.add.pais != '' && that.add.aluno != '' && that.add.valor != '') {
          $('#exampleModal2').modal('hide')
          if (that.alunos.length > 0) {
            let tam = that.alunos.length - 1
            that.add.id = that.alunos[tam].id + 1
            that.alunos.push(that.add)
            localStorage.setItem('alunos', JSON.stringify(that.alunos))
          } else {
            that.add.id = 1
            that.alunos.push(that.add)
            localStorage.setItem('alunos', JSON.stringify(that.alunos))
          }
          that.add = {
            pais: '',
            aluno: '',
            valor: '',
          }
        }
      });
      // Example starter JavaScript for disabling form submissions if there are invalid fields
      (function () {
        'use strict'  
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }
              form.classList.add('was-validated')
            }, false)
          })
      })()
    },
    methods: {
      idadeVezes3() {
          return this.idade * 3
      },
      carne() {
        if (this.numPrint.num < this.numPrint.max) {
        this.carnes += `<form id="yesprint" class="paybook row mt-1 print">
              <div class="col-3 row bar-div">
                <div class="col-md-12">
                  <label for="inputEmail4">Aluno(a)</label>
                  <input type="email" class="form-control ht25" value="${this.novo.aluno}" id="inputEmail4">
                </div>
                <div class="col-md-12 top-10">
                  <label for="inputPassword4">Data</label>
                  <input type="text" class="form-control ht25" id="inputPassword4" value="___/___/_____">
                </div>
                <div class="col-md-12 top-10">
                  <label for="inputEmail4">Valor</label>
                  <input type="email" class="form-control ht25" value="${this.novo.valor}" id="inputEmail4">
                </div>
              </div>
              <div class="col-9 mb-1 row">
                <div class="col-12 text-center">
                  <h4 class="mb-0">
                    AULA DE REFORÇO
                  </h4>
                  <p class="mb-1">
                  <i>da Pró IRIS</i>
                  </p>
                </div>
                <div class="x1x1">
                  <div class="col-x2 mr-1">
                    <label for="inputAddress">Nome do Mãe/Pai</label>
                    <input type="text" class="form-control ht25" id="inputAddress" value="${this.novo.pais}">
                  </div>
                  <div class="col-x2 ml-1">
                    <label for="inputAddress">Aluno(a)</label>
                    <input type="text" class="form-control ht25" id="inputAddress" value="${this.novo.aluno}">
                  </div>
                </div>
                <div class="row">
                  <div class="x2x2">
                    <div class="col-x2 mr-1">
                      <label for="inputEmail4">Valor</label>
                      <input type="email" class="form-control ht25" id="inputEmail4" value="${this.novo.valor}">
                    </div>
                    <div class="col-x2 ml-1">
                      <label for="inputPassword4">Data</label>
                      <input type="text" class="form-control ht25" id="inputPassword4" value="___/___/_____">
                    </div>
                  </div>
                  <div class="x2x2x">
                    <div class="col-12">
                      <label for="inputAddress">Assinatura</label>
                      <input type="text" class="form-control ht25" id="inputAddress">
                    </div>
                  </div>
                </div>
              </div>
          </form>`
          $("#print").html(this.carnes); 
          this.novo = false
          this.numPrint.num++
        }
      }
    }
})