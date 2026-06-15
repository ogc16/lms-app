export const vbCourse = {
  id: 'vb',
  title: 'Visual Basic',
  subtitle: 'Rapid application development',
  icon: '💠',
  color: '#945DB7',
  bgColor: '#F3E5F5',
  description: 'Visual Basic (.NET) is an approachable, object-oriented language from Microsoft that enables rapid development of Windows applications, automation scripts, and enterprise tools with a gentle learning curve.',
  chapters: [
    {
      id: 'vb_intro',
      title: 'Introduction to VB.NET',
      lessons: [
        {
          id: 'vb_what_is',
          title: 'What is Visual Basic?',
          content: 'Visual Basic .NET (VB.NET) evolved from classic VB (1991) into a fully object-oriented language on the .NET platform. It emphasizes readability and developer productivity.\n\nKey features:\n• English-like syntax (no semicolons, natural language keywords)\n• Full .NET framework access\n• Object-oriented with classes and inheritance\n• Windows Forms and WPF for desktop apps\n• ASP.NET for web applications\n• Excellent for beginners and rapid prototyping\n\nVB.NET is fully interoperable with C#—they compile to the same IL code.',
          codeExamples: [
            {
              title: 'Hello, VB.NET!',
              code: 'Imports System\n\nModule Program\n    Sub Main()\n        Console.WriteLine("Hello, VB.NET!")\n        \n        Dim name As String = "Visual Basic"\n        Dim version As Integer = 16\n        Console.WriteLine($"{name} version {version}")\n    End Sub\nEnd Module'
            }
          ]
        },
        {
          id: 'vb_setup',
          title: 'Setting Up VB.NET',
          content: 'Getting started:\n\n1. Install Visual Studio (Community free) with ".NET desktop development" workload\n2. Or use VS Code with .NET SDK and VB.NET extension\n3. Install .NET SDK from dotnet.microsoft.com\n\nCreate: dotnet new console -lang vb -n MyApp\nRun: dotnet run\n\nVB.NET files use .vb extension. Online editors: dotnetfiddle.net, replit.com.',
          codeExamples: [
            {
              title: 'Create VB Project',
              code: '# Create a VB.NET console app\ndotnet new console -lang vb -n HelloVB\ncd HelloVB\n\n# Program.vb is created automatically\ndotnet run\n\n# Create Windows Forms app\n# Use Visual Studio template:\n# File > New > Project > Visual Basic > Windows Forms App'
            }
          ]
        },
        {
          id: 'vb_basics',
          title: 'VB.NET Basics',
          content: 'VB.NET syntax is designed to be readable:\n\n• Dim declares variables: Dim x As Integer = 10\n• Type inference: Dim name = "VB" (Option Infer On)\n• Strings: Dim msg = "Hello" & " " & "World"\n• If/Then/Else, Select Case\n• For/Next, For Each, Do/Loop\n\nModules group code (like static classes). Sub is a void method. Function returns a value.\n\nComments with single quote (\'): \' This is a comment',
          codeExamples: [
            {
              title: 'Variables and Control Flow',
              code: 'Imports System\n\nModule Program\n    Sub Main()\n        Dim name As String = "VB.NET"\n        Dim year As Integer = 2002\n        Dim pi As Double = 3.14159\n        IsFun()\n        \n        Dim numbers() As Integer = {1, 2, 3, 4, 5}\n        \n        For Each n In numbers\n            If n Mod 2 = 0 Then\n                Console.WriteLine($"{n} is even")\n            End If\n        Next\n        \n        Dim result = If(year > 2000, "modern", "classic")\n        Console.WriteLine($"{name} is {result}")\n    End Sub\n    \n    Sub IsFun()\n        Console.WriteLine("VB.NET is fun!")\n    End Sub\nEnd Module'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What keyword declares a variable in VB.NET?',
          options: ['var', 'Dim', 'let', 'Set'],
          correct: 1
        },
        {
          question: 'What file extension does VB.NET use?',
          options: ['.vbs', '.vb', '.bas', '.net'],
          correct: 1
        },
        {
          question: 'Which is NOT a VB.NET loop?',
          options: ['For Next', 'Do Loop', 'For Each', 'foreach'],
          correct: 3
        }
      ]
    },
    {
      id: 'vb_oop',
      title: 'Object-Oriented VB.NET',
      lessons: [
        {
          id: 'vb_classes',
          title: 'Classes and Objects',
          content: 'VB.NET supports full OOP with classes, inheritance, and interfaces.\n\nClass Person\n    Public Property Name As String\n    Private _age As Integer\n    \n    Public Sub New(name As String)\n        Me.Name = name\n    End Sub\n    \n    Public ReadOnly Property Age As Integer\n        Get\n            Return _age\n        End Get\n    End Property\nEnd Class\n\nProperties use Get/Set accessors. Auto-properties: Property Name As String.\n\nConstructors use New keyword.',
          codeExamples: [
            {
              title: 'Class Example',
              code: 'Imports System\n\nPublic Class BankAccount\n    Public Property Owner As String\n    Private _balance As Decimal\n    \n    Public Sub New(owner As String, initial As Decimal)\n        Me.Owner = owner\n        _balance = initial\n    End Sub\n    \n    Public Sub Deposit(amount As Decimal)\n        If amount > 0 Then _balance += amount\n    End Sub\n    \n    Public Function Withdraw(amount As Decimal) As Boolean\n        If amount > 0 AndAlso _balance >= amount Then\n            _balance -= amount\n            Return True\n        End If\n        Return False\n    End Function\n    \n    Public ReadOnly Property Balance As Decimal\n        Get\n            Return _balance\n        End Get\n    End Property\nEnd Class\n\nModule Program\n    Sub Main()\n        Dim account As New BankAccount("Alice", 1000)\n        account.Deposit(500)\n        Console.WriteLine($"Balance: ${account.Balance}")\n    End Sub\nEnd Module'
            }
          ]
        },
        {
          id: 'vb_inheritance',
          title: 'Inheritance',
          content: 'VB.NET supports single inheritance with the Inherits keyword.\n\nClass Animal\n    Public Overridable Sub Speak()\n        Console.WriteLine("...")\n    End Sub\nEnd Class\n\nClass Dog\n    Inherits Animal\n    Public Overrides Sub Speak()\n        Console.WriteLine("Woof!")\n    End Sub\nEnd Class\n\n• Overridable allows overriding\n• Overrides implements the override\n• MustInherit makes abstract class (like abstract)\n• NotInheritable prevents inheritance (like sealed)\n• MyBase accesses parent class members',
          codeExamples: [
            {
              title: 'Inheritance Example',
              code: 'Imports System\n\nMustInherit Class Shape\n    Public MustOverride Function GetArea() As Double\nEnd Class\n\nClass Circle\n    Inherits Shape\n    Private _radius As Double\n    \n    Public Sub New(r As Double)\n        _radius = r\n    End Sub\n    \n    Public Overrides Function GetArea() As Double\n        Return Math.PI * _radius * _radius\n    End Function\nEnd Class\n\nModule Program\n    Sub Main()\n        Dim shapes As Shape() = {New Circle(5), New Circle(10)}\n        For Each s In shapes\n            Console.WriteLine($"Area: {s.GetArea():F2}")\n        Next\n    End Sub\nEnd Module'
            }
          ]
        },
        {
          id: 'vb_events',
          title: 'Events and Delegates',
          content: 'VB.NET uses events and delegates for callback-based programming.\n\nDeclare an event:\nPublic Event PropertyChanged(sender As Object, e As EventArgs)\n\nRaise an event:\nRaiseEvent PropertyChanged(Me, EventArgs.Empty)\n\nHandle an event:\nAddHandler obj.PropertyChanged, AddressOf HandlerMethod\n\nOr use Handles keyword:\nSub OnChanged() Handles obj.PropertyChanged\n\nDelegates are type-safe function pointers used by events and callbacks.',
          codeExamples: [
            {
              title: 'Events Example',
              code: 'Imports System\n\nClass TemperatureSensor\n    Public Event TemperatureChanged(newTemp As Double)\n    \n    Private _temp As Double\n    \n    Public Property Temperature As Double\n        Get\n            Return _temp\n        End Get\n        Set(value As Double)\n            If _temp <> value Then\n                _temp = value\n                RaiseEvent TemperatureChanged(_temp)\n            End If\n        End Set\n    End Property\nEnd Class\n\nModule Program\n    Private Sub OnTempChanged(newTemp As Double)\n        Console.WriteLine($"Temperature changed to {newTemp}ÃÂ°C")\n    End Sub\n    \n    Sub Main()\n        Dim sensor As New TemperatureSensor()\n        AddHandler sensor.TemperatureChanged, AddressOf OnTempChanged\n        \n        sensor.Temperature = 25.5\n        sensor.Temperature = 30.0\n    End Sub\nEnd Module'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What keyword inherits a class in VB.NET?',
          options: ['extends', 'Inherits', ':', 'Implements'],
          correct: 1
        },
        {
          question: 'What keyword prevents a method from being overridden?',
          options: ['Sealed', 'NotOverridable', 'Final', 'Static'],
          correct: 1
        },
        {
          question: 'How do you raise an event in VB.NET?',
          options: ['trigger', 'fire', 'RaiseEvent', 'Invoke'],
          correct: 2
        }
      ]
    },
    {
      id: 'vb_advanced',
      title: 'Advanced VB.NET',
      lessons: [
        {
          id: 'vb_linq',
          title: 'LINQ in VB.NET',
          content: 'VB.NET has deep LINQ integration with SQL-like syntax that feels natural.\n\nDim results = From p In people\n              Where p.Age > 18\n              Order By p.Name\n              Select p.Name\n\nAggregations:\nDim total = Aggregate n In numbers Into Sum()\nDim average = Aggregate n In numbers Into Average()\n\nLINQ works on any IEnumerable(Of T). The System.Linq namespace provides extension methods.',
          codeExamples: [
            {
              title: 'LINQ Examples',
              code: 'Imports System\nImports System.Linq\n\nModule Program\n    Sub Main()\n        Dim numbers = New List(Of Integer) From {5, 2, 8, 1, 9, 3}\n        \n        Dim evens = From n In numbers\n                    Where n Mod 2 = 0\n                    Order By n\n                    Select n\n        \n        Dim stats = New With {\n            .Count = numbers.Count(),\n            .Sum = numbers.Sum(),\n            .Avg = numbers.Average(),\n            .Max = numbers.Max()\n        }\n        \n        Console.WriteLine($"Evens: {String.Join(", ", evens)}")\n        Console.WriteLine($"Sum: {stats.Sum}, Avg: {stats.Avg:F1}")\n    End Sub\nEnd Module'
            }
          ]
        },
        {
          id: 'vb_winforms',
          title: 'Windows Forms',
          content: 'VB.NET excels at desktop GUI development with Windows Forms.\n\nDesign forms visually in Visual Studio:\n• Drag and drop controls from toolbox\n• Double-click controls to add event handlers\n• Properties window to configure appearance\n\nCommon controls: Button, TextBox, Label, DataGridView, ComboBox, ListBox\n\nEvents: Click, TextChanged, SelectedIndexChanged, Load\n\nWindows Forms follows event-driven programming with easy data binding.',
          codeExamples: [
            {
              title: 'Simple Windows Form',
              code: 'Imports System.Windows.Forms\n\nPublic Class MainForm\n    Inherits Form\n    \n    Private WithEvents btnClick As Button\n    Private txtName As TextBox\n    Private lblGreeting As Label\n    \n    Public Sub New()\n        Me.Text = "VB.NET Greeting"\n        Me.Size = New Size(300, 200)\n        \n        txtName = New TextBox With {.Location = New Point(20, 20), .Width = 200}\n        btnClick = New Button With {.Text = "Greet", .Location = New Point(20, 60)}\n        lblGreeting = New Label With {.Location = New Point(20, 100), .Width = 250}\n        \n        Controls.Add(txtName)\n        Controls.Add(btnClick)\n        Controls.Add(lblGreeting)\n    End Sub\n    \n    Private Sub btnClick_Click(sender As Object, e As EventArgs) Handles btnClick.Click\n        lblGreeting.Text = $"Hello, {txtName.Text}!"\n    End Sub\nEnd Class'
            }
          ]
        },
        {
          id: 'vb_my',
          title: 'My Namespace',
          content: 'VB.NET has a unique My namespace that provides quick access to common .NET features.\n\nMy.Computer: access to computer resources\nMy.Application: application information\nMy.User: current user info\nMy.Settings: application settings\nMy.Resources: embedded resources\n\nMy.Computer.FileSystem.ReadAllText("file.txt")\nMy.Computer.Info.AvailablePhysicalMemory\nMy.Computer.Network.Ping("google.com")\n\nThe My namespace simplifies common tasks, especially for beginners.',
          codeExamples: [
            {
              title: 'Using My Namespace',
              code: 'Imports System\n\nModule Program\n    Sub Main()\n        \' Computer information\n        Console.WriteLine($"OS: {My.Computer.Info.OSFullName}")\n        Console.WriteLine($"RAM: {My.Computer.Info.TotalPhysicalMemory / 1024^3} GB")\n        \n        \' File system\n        Dim files = My.Computer.FileSystem.GetFiles(\n            "C:\\Users", True, "*.txt")\n        Console.WriteLine($"Found {files.Count} text files")\n        \n        \' Clipboard\n        My.Computer.Clipboard.SetText("Hello from VB.NET!")\n        Console.WriteLine("Text copied to clipboard")\n    End Sub\nEnd Module'
            }
          ]
        }
      ],
      quiz: [
        {
          question: 'What namespace provides quick access to computer resources?',
          options: ['My', 'System.Computer', 'Microsoft.VisualBasic', 'Computer'],
          correct: 0
        },
        {
          question: 'What Aggregate clause computes a sum in LINQ?',
          options: ['Sum()', 'Total()', 'Aggregate...Into Sum()', 'Compute Sum'],
          correct: 2
        },
        {
          question: 'Which is the event-driven GUI framework for VB.NET?',
          options: ['WPF', 'Windows Forms', 'MAUI', 'Blazor'],
          correct: 1
        }
      ]
    }
  ]
};
