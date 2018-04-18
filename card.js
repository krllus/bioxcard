window.onload = function() {
	init();
};

var name = "Nome"
var job = "Função"
var phone1 = "Celular: (62) 99999-9999"
var phone2 = "Fone: (62) 9999-9999 / 8888-8888"
var site = "www.bioxbr.com"

function init() {
	$("#biox").submit(function(event) {
		event.preventDefault()
	})

	$("#btnReset").click(function() {
		resetContent();
	});


    $("#inputName").keyup(function(){       
        var currentText = $(this).val();    
        setName(currentText);
    });

    $("#inputJob").keyup(function(){       
        var currentText = $(this).val();    
        setJob(currentText);
    });

    $("#inputPhone1").keyup(function(){       
        var currentText = $(this).val();    
        setPhone1(currentText);
    });

    $("#inputPhone2").keyup(function(){       
        var currentText = $(this).val();    
        setPhone2(currentText);
    });

    $("#inputSite").keyup(function(){       
        var currentText = $(this).val();    
        setSite(currentText);
    });

	resetContent();
}

function resetContent() {
	setName(name);
	setJob(job);
	setPhone1(phone1);
	setPhone2(phone2);
	setSite(site);
}

function setName(name) {
	$("#name").text(name);
}

function setJob(job) {
	$("#job").text(job);
}

function setPhone1(phone) {
	$("#phone1").text(phone);
}

function setPhone2(phone) {
	$("#phone2").text(phone);
}

function setSite(site) {
	$("#site").text(site);
}