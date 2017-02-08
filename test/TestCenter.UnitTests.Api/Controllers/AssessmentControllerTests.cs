using System;
using TestCenter.Models;
using TestCenter.Api.Controllers;
using Xunit;

namespace TestCenter.UnitTests.Api
{
  // see example explanation on xUnit.net website:
  // https://xunit.github.io/docs/getting-started-dotnet-core.html
  public class AssessmentControllerTests
  {
    [Fact]
    public void PassingTest()
    {
      Assert.Equal(4, Add(2, 2));
    }

    [Fact]
    public void FailingTest()
    {
      Assert.Equal(5, Add(2, 2));
    }

    int Add(int x, int y)
    {
      return x + y;
    }

    public void ShouldReturnTopAssessments()
    {
      Assert.Equal(4, Add(2, 2));
    }

    public void Post_CreateNewAssessment()
    {
      var assessment = new Assessment(Guid.NewGuid(), "SampleTest");

      // var controller = new AssessmentController();
    }
  }
}
