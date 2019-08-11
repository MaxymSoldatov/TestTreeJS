!function getElements () {
  var n = {data: [{id: '1', parent: null}, {id: '2', parent: '1'}, {id: '3', parent: '1'}, {id: '4', parent: '3'}, {id: '5', parent: '3'}, {id: '6', parent: '3'}, {id: '7', parent: '4'}, {id: '8', parent: '2'}, {id: '9', parent: '4'}]};
  window.TreeAPI = {
    getData: function () {
      return new Promise(function (t) {
        setTimeout(function () {
          t(n)
        }, 1e3 * Math.random());
      })
    }
  }
}();

function setElements() {


  window.TreeAPI.getData().then((res) => {
    console.log(res);

    for (let elem of res.data) {
      const elDiv = document.createElement('div');
      elDiv.id = elem.id;
      elDiv.className = 'bs';
      elDiv.innerText = elem.id;
      const innerTable = document.createElement('table');
      const trElem = document.createElement('tr');
      const tdElem = document.createElement('td');
      tdElem.appendChild(elDiv);
      trElem.appendChild(tdElem);
      innerTable.appendChild(trElem);
      if (elem.parent === null) {
        document.getElementById('begin').appendChild(elDiv)
      } else {
        if(res.data.filter(item => item.parent === elem.parent).length > 1) {
          document.getElementById(elem.parent).parentNode.appendChild(tdElem)
        } else {
          document.getElementById(elem.parent).parentNode.appendChild(innerTable)
        }
      }
    }
  })
}


