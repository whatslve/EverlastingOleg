//����� ������������� �������� ������� ����

//������� getRandom ��������� ������������� ��������� �����
//�� min � max �������� �������� "var random = getRandom(1,10);"
var getRandom = function(min, max) {
	return Math.random() * (max-min) + min;
}