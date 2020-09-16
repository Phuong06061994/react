using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using react_crud.Models;

namespace react_crud.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly string _connectionString;

        public TaskController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DbConnectionString");
        }

        [HttpGet]
        public async Task<IEnumerable<TaskDto>> Get()
        {
            using (var conn = new SqlConnection(_connectionString))
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                    conn.Open();
                var result = await conn.QueryAsync<TaskDto>("GetAllTask", null, commandType: CommandType.StoredProcedure);
                return result;
            }
        }

        [HttpPost]
        public async Task<int> Create(TaskDto request)
        {
            using (var conn = new SqlConnection(_connectionString))
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                    conn.Open();
                DynamicParameters pars = new DynamicParameters();
                pars.Add("@ID", request.ID, DbType.Int32, direction: ParameterDirection.Input);
                pars.Add("@Name", request.Name, DbType.String, direction: ParameterDirection.Input);
                pars.Add("@StartDate", request.StartDate, DbType.Date, direction: ParameterDirection.Input);
                pars.Add("@EndDate", request.EndDate, DbType.Date, direction: ParameterDirection.Input);
                pars.Add("@Status", request.Status, DbType.Int32, direction: ParameterDirection.Input);
                var result = await conn.ExecuteAsync("CreateOrUpdateTask", pars, commandType: CommandType.StoredProcedure);
                return result;
            }
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<int> Delete(int id)
        {
            using (var conn = new SqlConnection(_connectionString))
            {
                if (conn.State == System.Data.ConnectionState.Closed)
                    conn.Open();
                DynamicParameters pars = new DynamicParameters();
                pars.Add("@ID", id, DbType.Int32, direction: ParameterDirection.Input);
                var result = await conn.ExecuteAsync("DeleteTask", pars, commandType: CommandType.StoredProcedure);
                return result;
            }
        }
    }
}
